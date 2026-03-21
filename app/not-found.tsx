import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Container className="py-32 text-center">
      <p className="font-mono text-accent text-sm mb-4">$ cat /404</p>
      <h1 className="text-5xl md:text-7xl font-bold mb-4">404</h1>
      <p className="text-text-secondary text-lg mb-8">
        Cette page n&apos;existe pas. Peut-être un mauvais{" "}
        <span className="font-mono text-text-primary">ln -s</span> ?
      </p>
      <Button href="/">Retour à l&apos;accueil</Button>
    </Container>
  );
}
