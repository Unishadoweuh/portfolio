import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Container className="py-32 text-center">
      <h1 className="text-5xl md:text-7xl font-bold mb-4">404</h1>
      <p className="text-text-secondary text-lg mb-8">
        Page introuvable. Le lien que vous suivez n&apos;existe peut-être plus.
      </p>
      <Button href="/">Retour à l&apos;accueil</Button>
    </Container>
  );
}