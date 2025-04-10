import { getDataHome, getSubMenu } from "@/utils/actions/get-data";
import { HomeProps } from "@/utils/home.type";
import { MenuProps } from "@/utils/menu.type";
import { PhoneCall } from "lucide-react";
import Container from "./components/container";
import Hero from "./components/hero";
import { Footer } from "./components/home/footer";
import { Services } from "./components/home/services";
import Submenu from "./components/home/submenu";

export default async function Home() {
  const { object }: HomeProps = await getDataHome();
  const menu: MenuProps = await getSubMenu();

  return (
    <main>
      {menu.objects.length > 0 && <Submenu menu={menu} />}

      <Hero
        heading={object.metadata.heading}
        buttonUrl={object.metadata.cta_button.url}
        buttonTitle={object.metadata.cta_button.title}
        bannerUrl={object.metadata.banner.url}
        icon={<PhoneCall size={24} color="#fff" />}
      />

      <Container>
        <Services object={object} />
      </Container>

      <Footer object={object} />
    </main>
  );
}
