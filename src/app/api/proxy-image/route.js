export const runtime = "nodejs";

export async function GET(req) {
  const { searchParams } = req.nextUrl;
  const id = searchParams.get("id");

  if (!id) {
    return new Response("Missing image ID", { status: 400 });
  }

  const imageUrl = `${process.env.NEXT_PUBLIC_DIRECTUS_URL}/assets/${id}`;

  try {
    const imageRes = await fetch(imageUrl, {
      method: "GET",
      headers: {
        Accept: "image/*",
        Authorization: `Bearer ${process.env.DIRECTUS_IMAGE_TOKEN}`,
      },
      cache: "no-store",
    });

    if (!imageRes.ok) {
      console.error(
        `❌ Image fetch failed from Directus: ${imageRes.statusText}`
      );
      return new Response("Image not found", { status: imageRes.status });
    }

    const buffer = await imageRes.arrayBuffer();
    const contentType = imageRes.headers.get("content-type") || "image/jpeg";

    return new Response(Buffer.from(buffer), {
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "public, max-age=86400",
      },
    });
  } catch (error) {
    console.error("❌ Error proxying image:", error);
    return new Response("Error fetching image", { status: 500 });
  }
}
