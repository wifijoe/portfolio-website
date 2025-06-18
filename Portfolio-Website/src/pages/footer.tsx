import { Footer, FooterLink, FooterLinkGroup, DarkThemeToggle } from "flowbite-react";

const Foot = () => {
  return (
    <Footer className="rounded-none" container>
      <FooterLinkGroup>
        <FooterLink href="">This</FooterLink>
        <FooterLink href="">Will Have</FooterLink>
        <FooterLink href="">More things</FooterLink>
        <FooterLink href="">Down here</FooterLink>
      </FooterLinkGroup>
      <DarkThemeToggle />
    </Footer>
  );
}

export default Foot;