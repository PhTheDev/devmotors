import { HomeProps } from "@/utils/home.type";
import { Clock, Mail, Map, Phone } from "lucide-react";
import styles from "./styles.module.scss";

export function Footer({ object }: HomeProps) {
  return (
    <footer id="contato" className={styles.footer}>
      <section className={styles.section}>
        <h2 className={styles.title}>Contatos</h2>

        <div className={styles.content}>
          <div className={styles.item}>
            <Mail size={28} color="#FFF" />
            <div>
              <strong>Email</strong>
              <p>{object.metadata.contact.email}</p>
            </div>
          </div>

          <div className={styles.item}>
            <Phone size={28} color="#FFF" />
            <div>
              <strong>Telefone</strong>
              <p>{object.metadata.contact.phone}</p>
            </div>
          </div>

          <div className={styles.item}>
            <Map size={28} color="#FFF" />
            <div>
              <strong>Endereço</strong>
              <p>{object.metadata.contact.address}</p>
            </div>
          </div>

          <div className={styles.item}>
            <Clock size={28} color="#FFF" />
            <div>
              <strong>Horário</strong>
              <p>{object.metadata.contact.time}</p>
            </div>
          </div>
        </div>
      </section>
      <a
        target="_blank"
        href={object.metadata.cta_button.url}
        className={styles.link}
      >
        <Phone size={28} color="#FFF" />
        <p>Fale com nosso atendente</p>
      </a>
    </footer>
  );
}
