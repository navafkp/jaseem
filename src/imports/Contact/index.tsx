import svgPaths from "./svg-mug09nauqb";
import imgDfn1 from "./d6ae71745f43c080f9c9208d4c8bc0f4b984154d.png";

function Container1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 max-w-[320px] right-0 top-[73px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#414944] text-[16px] w-full">
        <p className="leading-[24px] mb-0">Artisanal Minimalism in every</p>
        <p className="leading-[24px] mb-0">drop. Sourced ethically from</p>
        <p className="leading-[24px]">pristine wild forests.</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="flex-[1_0_0] h-[189px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="absolute h-[57px] left-0 top-0 w-[195px]" data-name="dfn 2">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgDfn1} />
        </div>
        <Container1 />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#033425] text-[16px] w-full">
        <p className="leading-[24px]">Explore</p>
      </div>
    </div>
  );
}

function Item() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#414944] text-[16px] w-full">
        <p className="leading-[24px]">Shop</p>
      </div>
    </div>
  );
}

function Item1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#414944] text-[16px] w-full">
        <p className="leading-[24px]">About Us</p>
      </div>
    </div>
  );
}

function Item2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#414944] text-[16px] w-full">
        <p className="leading-[24px]">Our Process</p>
      </div>
    </div>
  );
}

function Item3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#414944] text-[16px] w-full">
        <p className="leading-[24px]">Blog</p>
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="List">
      <Item />
      <Item1 />
      <Item2 />
      <Item3 />
    </div>
  );
}

function Container2() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative size-full">
        <Heading2 />
        <List />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#033425] text-[16px] w-full">
        <p className="leading-[24px]">Support</p>
      </div>
    </div>
  );
}

function Item4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#414944] text-[16px] w-full">
        <p className="leading-[24px]">Contact</p>
      </div>
    </div>
  );
}

function Item5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#414944] text-[16px] w-full">
        <p className="leading-[24px]">FAQ</p>
      </div>
    </div>
  );
}

function Item6() {
  return <div className="h-[24px] relative shrink-0 w-full" data-name="Item" />;
}

function Item7() {
  return <div className="h-[24px] relative shrink-0 w-full" data-name="Item" />;
}

function List1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="List">
      <Item4 />
      <Item5 />
      <Item6 />
      <Item7 />
    </div>
  );
}

function Container3() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative size-full">
        <Heading3 />
        <List1 />
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#033425] text-[16px] w-full">
        <p className="leading-[24px]">Connect</p>
      </div>
    </div>
  );
}

function Item8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#414944] text-[16px] w-full">
        <p className="leading-[24px]">Instagram</p>
      </div>
    </div>
  );
}

function Item9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#414944] text-[16px] w-full">
        <p className="leading-[24px]">Facebook</p>
      </div>
    </div>
  );
}

function Item10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#414944] text-[16px] w-full">
        <p className="leading-[24px]">YouTube</p>
      </div>
    </div>
  );
}

function List2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="List">
      <Item8 />
      <Item9 />
      <Item10 />
    </div>
  );
}

function Container4() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start pb-[36px] relative size-full">
        <Heading4 />
        <List2 />
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="content-stretch flex gap-[60px] items-center justify-center max-w-[1440px] pb-[49px] pl-[200px] pr-[100px] relative shrink-0 w-[1440px]" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[rgba(192,200,194,0.3)] border-b border-solid inset-0 pointer-events-none" />
      <Container />
      <Container2 />
      <Container3 />
      <Container4 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#414944] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">© 2024 Kadleaf. All rights reserved.</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#414944] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Privacy Policy</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Link">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#414944] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Terms of Service</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex gap-[23.99px] items-start relative shrink-0" data-name="Container">
      <Link />
      <Link1 />
    </div>
  );
}

function Container5() {
  return (
    <div className="max-w-[1440px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center max-w-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between max-w-[inherit] px-[80px] relative size-full">
          <Container6 />
          <Container7 />
        </div>
      </div>
    </div>
  );
}

function Footer12Footer() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#f6f3f2] bottom-0 content-stretch flex flex-col gap-[32px] items-start left-1/2 py-[64px] w-[1512px]" data-name="Footer - 12. FOOTER">
      <HorizontalBorder />
      <Container5 />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#033425] text-[75px] text-center w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p>
          <span className="leading-[90px]">{`We're Always Here to `}</span>
          <span className="leading-[90px] text-[#7d5700]">Help</span>
        </p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center max-w-[512px] pb-[24px] pt-[8px] relative shrink-0 w-[512px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#414944] text-[16px] text-center w-[648px]">
        <p className="leading-[24px]">{`Whether you have a question about our products, your order, wholesale opportunities, or simply want to know more about Kadleaf, we'd love to hear from you. Our team is always ready to assist you with care and attention.`}</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[8px] items-center justify-center left-1/2 max-w-[672px] top-[300px] w-[672px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#7d5700] text-[16px] tracking-[3.2px] whitespace-nowrap">
        <p className="leading-[24px]">NATURAL WELLNESS</p>
      </div>
      <Heading />
      <Container9 />
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[15px] relative shrink-0 w-[19px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="14.9999" preserveAspectRatio="none" viewBox="0 0 18.9999 14.9999" width="18.9999">
        <g id="Container">
          <path d={svgPaths.p3f52f0c0} fill="#033425" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay() {
  return (
    <div className="bg-[rgba(3,52,37,0.05)] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[48px]" data-name="Overlay">
      <Container10 />
    </div>
  );
}

function Margin() {
  return (
    <div className="h-[64px] relative shrink-0 w-[48px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative size-full">
        <Overlay />
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#7d5700] text-[12px] text-center tracking-[1.2px] whitespace-nowrap">
        <p className="leading-[16px]">Email</p>
      </div>
    </div>
  );
}

function Heading3Margin() {
  return (
    <div className="relative shrink-0" data-name="Heading 3:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Heading5 />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pl-[21.13px] pr-[21.14px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#414944] text-[16px] text-center whitespace-nowrap">
          <p className="leading-[24px] mb-0">Press:</p>
          <p className="leading-[24px]">media@kadleaf.com</p>
        </div>
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(255,255,255,0.8)] flex-[1_0_0] min-w-px relative rounded-[20px]" data-name="Card 1">
      <div aria-hidden className="absolute border border-[rgba(31,75,58,0.05)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center p-[33px] relative size-full">
          <Margin />
          <Heading3Margin />
          <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1b1b1c] text-[16px] text-center whitespace-nowrap">
            <p className="leading-[24px]">support@kadleaf.com</p>
          </div>
          <Container11 />
        </div>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="relative shrink-0 size-[17px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="16.9999" preserveAspectRatio="none" viewBox="0 0 16.9999 16.9999" width="16.9999">
        <g id="Container">
          <path d={svgPaths.p33049d00} fill="#033425" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay1() {
  return (
    <div className="bg-[rgba(3,52,37,0.05)] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[48px]" data-name="Overlay">
      <Container12 />
    </div>
  );
}

function Margin1() {
  return (
    <div className="h-[64px] relative shrink-0 w-[48px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative size-full">
        <Overlay1 />
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#7d5700] text-[12px] text-center tracking-[1.2px] whitespace-nowrap">
        <p className="leading-[16px]">Phone</p>
      </div>
    </div>
  );
}

function Heading3Margin1() {
  return (
    <div className="relative shrink-0" data-name="Heading 3:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Heading6 />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pl-[18.95px] pr-[18.97px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#414944] text-[16px] text-center whitespace-nowrap">
          <p className="leading-[24px] mb-0">Toll Free: 1800-KAD-</p>
          <p className="leading-[24px]">LEAF</p>
        </div>
      </div>
    </div>
  );
}

function Card1() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(255,255,255,0.8)] flex-[1_0_0] min-w-px relative rounded-[20px]" data-name="Card 2">
      <div aria-hidden className="absolute border border-[rgba(31,75,58,0.05)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center p-[33px] relative size-full">
          <Margin1 />
          <Heading3Margin1 />
          <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1b1b1c] text-[16px] text-center whitespace-nowrap">
            <p className="leading-[24px]">+91 98765 43210</p>
          </div>
          <Container13 />
        </div>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[19.01px] relative shrink-0 w-[15.096px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="19.0095" preserveAspectRatio="none" viewBox="0 0 15.0961 19.0095" width="15.0961">
        <g id="Container">
          <path d={svgPaths.p28d827c0} fill="#033425" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay2() {
  return (
    <div className="bg-[rgba(3,52,37,0.05)] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[48px]" data-name="Overlay">
      <Container14 />
    </div>
  );
}

function Margin2() {
  return (
    <div className="h-[64px] relative shrink-0 w-[48px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative size-full">
        <Overlay2 />
      </div>
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#7d5700] text-[12px] text-center tracking-[1.2px] whitespace-nowrap">
        <p className="leading-[16px]">Address</p>
      </div>
    </div>
  );
}

function Heading3Margin2() {
  return (
    <div className="relative shrink-0" data-name="Heading 3:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Heading7 />
      </div>
    </div>
  );
}

function Card2() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(255,255,255,0.8)] flex-[1_0_0] min-w-px relative rounded-[20px]" data-name="Card 3">
      <div aria-hidden className="absolute border border-[rgba(31,75,58,0.05)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center pb-[57px] pt-[33px] px-[33px] relative size-full">
          <Margin2 />
          <Heading3Margin2 />
          <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1b1b1c] text-[16px] text-center whitespace-nowrap">
            <p className="leading-[24px] mb-0">Munnar Valley Estate</p>
            <p className="leading-[24px] text-[#414944]">Idukki, Kerala, India</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="relative shrink-0 size-[19px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="18.9999" preserveAspectRatio="none" viewBox="0 0 18.9999 18.9999" width="18.9999">
        <g id="Container">
          <path d={svgPaths.p1b5e0f00} fill="#033425" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay3() {
  return (
    <div className="bg-[rgba(3,52,37,0.05)] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[48px]" data-name="Overlay">
      <Container15 />
    </div>
  );
}

function Margin3() {
  return (
    <div className="h-[64px] relative shrink-0 w-[48px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative size-full">
        <Overlay3 />
      </div>
    </div>
  );
}

function Heading8() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#7d5700] text-[12px] text-center tracking-[1.2px] whitespace-nowrap">
        <p className="leading-[16px]">Hours</p>
      </div>
    </div>
  );
}

function Heading3Margin3() {
  return (
    <div className="relative shrink-0" data-name="Heading 3:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Heading8 />
      </div>
    </div>
  );
}

function Card3() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(255,255,255,0.8)] flex-[1_0_0] min-w-px relative rounded-[20px]" data-name="Card 4">
      <div aria-hidden className="absolute border border-[rgba(31,75,58,0.05)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center pb-[57px] pt-[33px] px-[33px] relative size-full">
          <Margin3 />
          <Heading3Margin3 />
          <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1b1b1c] text-[16px] text-center whitespace-nowrap">
            <p className="leading-[24px] mb-0">Mon — Sat: 9am — 6pm</p>
            <p className="leading-[24px] text-[#414944]">Closed on Sundays</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionContactInfoGrid() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex gap-[24px] items-start justify-center left-1/2 pt-[64px] top-[564px] w-[1120px]" data-name="Section - Contact Info Grid">
      <Card />
      <Card1 />
      <Card2 />
      <Card3 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['EB_Garamond:Regular',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#033425] text-[32px] w-full">
          <p className="leading-[40px]">Send a Message</p>
        </div>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="relative shrink-0 w-full" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#414944] text-[12px] tracking-[1.2px] w-full">
          <p className="leading-[16px]">Full Name</p>
        </div>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(113,121,116,0.4)] w-full">
        <p className="leading-[normal]">John Doe</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="relative shrink-0 w-full" data-name="Input">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center overflow-clip py-[2px] relative rounded-[inherit] size-full">
        <Container17 />
      </div>
    </div>
  );
}

function HorizontalBorder1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px pb-[9px] pt-[8px] relative" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[rgba(192,200,194,0.3)] border-b border-solid inset-0 pointer-events-none" />
      <Label />
      <Input />
    </div>
  );
}

function Label1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#414944] text-[12px] tracking-[1.2px] w-full">
          <p className="leading-[16px]">Email Address</p>
        </div>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(113,121,116,0.4)] w-full">
        <p className="leading-[normal]">john@example.com</p>
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Input">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center overflow-clip py-[2px] relative rounded-[inherit] size-full">
        <Container18 />
      </div>
    </div>
  );
}

function HorizontalBorder2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px pb-[9px] pt-[8px] relative" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[rgba(192,200,194,0.3)] border-b border-solid inset-0 pointer-events-none" />
      <Label1 />
      <Input1 />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex gap-[24px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <HorizontalBorder1 />
      <HorizontalBorder2 />
    </div>
  );
}

function Label2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#414944] text-[12px] tracking-[1.2px] w-full">
          <p className="leading-[16px]">Phone</p>
        </div>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(113,121,116,0.4)] w-full">
        <p className="leading-[normal]">+91 00000 00000</p>
      </div>
    </div>
  );
}

function Input2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Input">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center overflow-clip py-[2px] relative rounded-[inherit] size-full">
        <Container20 />
      </div>
    </div>
  );
}

function HorizontalBorder3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px pb-[9px] pt-[8px] relative" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[rgba(192,200,194,0.3)] border-b border-solid inset-0 pointer-events-none" />
      <Label2 />
      <Input2 />
    </div>
  );
}

function Label3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#414944] text-[12px] tracking-[1.2px] w-full">
          <p className="leading-[16px]">Subject</p>
        </div>
      </div>
    </div>
  );
}

function Image() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="image">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="image">
          <path d="M7.2 9.6L12 14.4L16.8 9.6" id="Vector" stroke="#6B7280" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
        </g>
      </svg>
    </div>
  );
}

function ImageClip() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[0_0.42px_0_0] items-start justify-center overflow-clip pl-[181.58px] pr-[8px]" data-name="image clip">
      <Image />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1b1b1c] text-[16px] w-full">
        <p className="leading-[24px]">General Inquiry</p>
      </div>
    </div>
  );
}

function Options() {
  return (
    <div className="relative shrink-0 w-full" data-name="Options">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <ImageClip />
        <Container21 />
      </div>
    </div>
  );
}

function HorizontalBorder4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start pb-[9px] pt-[8px] relative shrink-0 w-[497px]" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[rgba(192,200,194,0.3)] border-b border-solid inset-0 pointer-events-none" />
      <Label3 />
      <Options />
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex gap-[24px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <HorizontalBorder3 />
      <HorizontalBorder4 />
    </div>
  );
}

function Label4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#414944] text-[12px] tracking-[1.2px] w-full">
          <p className="leading-[16px]">Your Message</p>
        </div>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(113,121,116,0.4)] w-full">
        <p className="leading-[24px]">How can we help you?</p>
      </div>
    </div>
  );
}

function Textarea() {
  return (
    <div className="relative shrink-0 w-full" data-name="Textarea">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center overflow-auto pb-[72px] relative rounded-[inherit] size-full">
        <Container22 />
      </div>
    </div>
  );
}

function HorizontalBorder5() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start pb-[15px] pt-[8px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[rgba(192,200,194,0.3)] border-b border-solid inset-0 pointer-events-none" />
      <Label4 />
      <Textarea />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#7d5700] content-stretch flex items-end justify-end px-[40px] py-[16px] relative rounded-[9999px] shrink-0" data-name="Button">
      <div className="absolute bg-[#7d5700] inset-[0_0.39px_0_0] rounded-[9999px] shadow-[0px_10px_15px_-3px_rgba(125,87,0,0.1),0px_4px_6px_-4px_rgba(125,87,0,0.1)]" data-name="Button:shadow" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#fefefe] text-[12px] text-center tracking-[1.2px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">SEND MESSAGE</p>
      </div>
    </div>
  );
}

function Form() {
  return (
    <div className="relative shrink-0 w-full" data-name="Form">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start relative size-full">
        <Container16 />
        <Container19 />
        <HorizontalBorder5 />
        <Button />
      </div>
    </div>
  );
}

function LeftForm() {
  return (
    <div className="-translate-x-1/2 absolute backdrop-blur-[6px] bg-[#fcf9f8] bottom-[821px] content-stretch drop-shadow-[-39px_149px_21.5px_rgba(0,0,0,0),-25px_96px_20px_rgba(0,0,0,0),-14px_54px_16.5px_rgba(0,0,0,0.01),-6px_24px_12.5px_rgba(0,0,0,0.02),-2px_6px_7px_rgba(0,0,0,0.03)] flex flex-col gap-[32px] items-start left-1/2 p-[49px] rounded-[20px] top-[933px] w-[1116px]" data-name="Left: Form">
      <div aria-hidden className="absolute border border-[rgba(31,75,58,0.05)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <Heading1 />
      <Form />
    </div>
  );
}

function Heading9() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#ffdeaa] text-[65px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[40px]">Stay Close to Nature.</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.9)] text-center whitespace-nowrap">
        <p className="leading-[24px] mb-0">Subscribe for early access to limited harvests, exclusive offers, and</p>
        <p className="leading-[24px]">wellness tips.</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(65,73,68,0.5)] w-full">
        <p className="leading-[normal]">Enter your email</p>
      </div>
    </div>
  );
}

function Input3() {
  return (
    <div className="bg-white flex-[1_0_0] max-w-[384px] min-w-px relative rounded-[9999px] self-stretch" data-name="Input">
      <div className="max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start max-w-[inherit] px-[24px] py-[18px] relative size-full">
          <Container25 />
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#9a6506] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center px-[32px] py-[16px] relative rounded-[9999px] shrink-0" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#fefefe] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[24px]">Subscribe</p>
      </div>
    </div>
  );
}

function Form1() {
  return (
    <div className="content-stretch flex gap-[16px] items-start justify-center relative shrink-0 w-full" data-name="Form">
      <Input3 />
      <Button1 />
    </div>
  );
}

function Container23() {
  return (
    <div className="max-w-[672px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-center justify-center max-w-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[40px] items-center justify-center max-w-[inherit] px-[80px] relative size-full">
          <Heading9 />
          <Container24 />
          <Form1 />
        </div>
      </div>
    </div>
  );
}

function Section11Newsletter() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#033425] content-stretch flex flex-col items-center justify-center left-1/2 px-[304px] py-[50px] top-[1562px] w-[1512px]" data-name="Section - 11. NEWSLETTER">
      <Container23 />
    </div>
  );
}

export default function Contact() {
  return (
    <div className="bg-[#fefefe] relative size-full" data-name="Contact">
      <div className="absolute bg-[rgba(0,0,0,0.14)] h-[38px] left-[1219px] rounded-[15px] top-[122px] w-[91px]" />
      <div className="-translate-x-1/2 absolute h-[57px] left-[calc(50%-583.5px)] top-[75px] w-[195px]" data-name="dfn 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgDfn1} />
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] left-[901px] text-[20px] text-[rgba(64,64,64,0.75)] top-[141px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[32px]">{`Home `}</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] left-[1005px] opacity-75 text-[20px] text-[rgba(0,0,0,0.75)] top-[141px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[32px]">About</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] left-[1104px] opacity-75 text-[20px] text-[rgba(0,0,0,0.75)] top-[141px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[32px]">Benefits</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] left-[1229px] text-[#7d5700] text-[20px] top-[141px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[32px]">Contact</p>
      </div>
      <Footer12Footer />
      <Container8 />
      <SectionContactInfoGrid />
      <LeftForm />
      <Section11Newsletter />
    </div>
  );
}