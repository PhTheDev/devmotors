import { redirect } from "next/navigation";

export async function getDataHome() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/objects/67f6a2bbcbb3fe972a638a66?pretty=true&read_key=${process.env.READ_KEY}&depth=1&props=slug,title,metadata`,
      { next: { revalidate: 120 } }
    );

    if (!res.ok) {
      throw new Error("Erro ao buscar dados da home");
    }

    return res.json();
  } catch (err) {
    throw new Error("Erro ao buscar dados da home");
  }
}

export async function getSubMenu() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/objects?pretty=true&query=%7B%22type%22%3A%22pages%22%7D&limit=10&skip=0&read_key=${process.env.READ_KEY}&depth=1&props=slug%2Ctitle&sort=-order`,
      { next: { revalidate: 120 } }
    );

    if (!res.ok) {
      throw new Error("Erro ao buscar dados do submenu");
    }

    return res.json();
  } catch (err) {
    throw new Error("Erro ao buscar dados do submenu");
  }
}

export async function getItemBySlug(itemSlug: string) {
  const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}/objects`;

  // Definindo o objeto de consulta
  const queryParams = new URLSearchParams({
    query: JSON.stringify({
      slug: itemSlug,
    }),
    props: "slug,title,content,metadata",
    read_key: process.env.READ_KEY as string,
  });

  const url = `${baseUrl}?${queryParams.toString()}`;

  try {
    const res = await fetch(url, { next: { revalidate: 120 } });

    if (!res.ok) {
      throw new Error("Erro ao buscar dados do item");
    }

    return res.json();
  } catch (error) {
    //console.log(error);
    redirect("/");
  }
}
