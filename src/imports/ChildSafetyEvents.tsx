import svgPaths from "./svg-drhzmo0k2s";
import imgContainer from "figma:asset/b3385e8ec1459a460d1993f41d7244b06e6f6f93.png";
import imgBackground from "figma:asset/969b532f6ed765d5018ea4fba57c7e5186f0767f.png";
import imgBackground1 from "figma:asset/d0bf220929676f026c48987ba158d0e061feb180.png";
import imgBackground2 from "figma:asset/a3e0f75fe59a604b0cd61237326f3343914c5c8c.png";
import imgBackground3 from "figma:asset/5cc9a3c9d7281f35367c3f4c7ff1a22493735f56.png";
import imgBackground4 from "figma:asset/3d96d3e141504b2862f272cc1103c589e196398a.png";
import imgBackground5 from "figma:asset/370cf99a3b7184b8300591cc9e4767e710bf5b1d.png";
import imgBackground6 from "figma:asset/097cd756af3129314b78d7c667c4716010aedf90.png";
import imgBackground7 from "figma:asset/009edb217b1cc73b26929d19f80a40258098b519.png";
import imgBackground8 from "figma:asset/c646ad8c21187a78108de6c3178900807d13c6aa.png";
import imgBackground9 from "figma:asset/4510ee0352b0fcf87095ba42fd0c41b38eddb2b8.png";
import imgBackground10 from "figma:asset/62ffdd8dd905a68c377690001ad6fa2cb3ca6982.png";

function Icon() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[62.5%_33.33%_12.5%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 6.66667">
            <path d={svgPaths.p6877e0} id="Vector" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[12.5%_45.83%_54.17%_20.83%]" data-name="Vector">
        <div className="absolute inset-[-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.33333 8.33333">
            <path d={svgPaths.p3ffa2780} id="Vector" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[63.04%_8.33%_12.5%_79.17%]" data-name="Vector">
        <div className="absolute inset-[-17.04%_-33.33%_-17.04%_-33.34%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.16687 6.55854">
            <path d={svgPaths.p39df7200} id="Vector" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[13.04%_20.8%_54.67%_66.67%]" data-name="Vector">
        <div className="absolute inset-[-12.91%_-33.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.1734 8.1254">
            <path d={svgPaths.p159fd500} id="Vector" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-[#1d283a] relative rounded-[10px] shrink-0 size-[35.99px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[7.995px] px-[7.995px] relative size-full">
        <Icon />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[27.005px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Roboto:SemiBold',sans-serif] font-semibold leading-[24px] left-0 text-[#f8fafc] text-[16px] top-[0.78px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Child–Adult Interaction
      </p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[15.99px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[20px] left-[0.01px] text-[#94a3b8] text-[12px] top-[-4.24px] tracking-[0.25px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        ALT-1025
      </p>
    </div>
  );
}

function Container4() {
  return (
    <div className="flex-[1_0_0] h-[42.995px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading />
        <Paragraph />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[42.995px] relative shrink-0 w-[236.623px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[11.997px] items-center relative size-full">
        <Container3 />
        <Container4 />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[42.995px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex items-start justify-between relative size-full">
        <Container2 />
        <div className="bg-[#fbbd23] relative rounded-[9999px] shrink-0" data-name="Badge">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start overflow-clip px-[8px] py-[2px] relative rounded-[inherit]">
            <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#f8fafc] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Pending
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[13.993px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9931 13.9931">
        <g clipPath="url(#clip0_1_3736)" id="Icon">
          <path d={svgPaths.p215e6400} id="Vector" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16609" />
          <path d={svgPaths.p193aea80} id="Vector_2" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16609" />
        </g>
        <defs>
          <clipPath id="clip0_1_3736">
            <rect fill="white" height="13.9931" width="13.9931" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[15.99px] left-0 top-0 w-[48.307px]" data-name="Paragraph">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#94a3b8] text-[12px] top-[0.56px] tracking-[0.25px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Duration
      </p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute h-[20px] left-0 top-[15.99px] w-[48.307px]" data-name="Paragraph">
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[20px] left-0 text-[#f8fafc] text-[14px] top-[0.67px] w-[37px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        4 min
      </p>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[35.99px] relative shrink-0 w-[48.307px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph1 />
        <Paragraph2 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex gap-[7.995px] h-[35.99px] items-center left-0 top-0 w-[266.884px]" data-name="Container">
      <Icon1 />
      <Container7 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[13.993px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9931 13.9931">
        <g clipPath="url(#clip0_1_3648)" id="Icon">
          <path d={svgPaths.p38a73f00} id="Vector" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16609" />
          <path d={svgPaths.p10f6ea40} id="Vector_2" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16609" />
        </g>
        <defs>
          <clipPath id="clip0_1_3648">
            <rect fill="white" height="13.9931" width="13.9931" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="absolute h-[15.99px] left-0 top-0 w-[64.21px]" data-name="Paragraph">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#94a3b8] text-[12px] top-[0.56px] tracking-[0.25px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Camera
      </p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="absolute h-[20px] left-0 top-[15.99px] w-[64.21px]" data-name="Paragraph">
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[20px] left-0 text-[#f8fafc] text-[14px] top-[0.67px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        CAM-203
      </p>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[35.99px] relative shrink-0 w-[64.21px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph3 />
        <Paragraph4 />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute content-stretch flex gap-[7.995px] h-[35.99px] items-center left-[282.88px] top-0 w-[266.892px]" data-name="Container">
      <Icon2 />
      <Container9 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[13.993px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9931 13.9931">
        <g clipPath="url(#clip0_1_3732)" id="Icon">
          <path d={svgPaths.p281fd980} id="Vector" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16609" />
          <path d={svgPaths.p206fb700} id="Vector_2" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16609" />
        </g>
        <defs>
          <clipPath id="clip0_1_3732">
            <rect fill="white" height="13.9931" width="13.9931" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="absolute h-[15.99px] left-0 top-0 w-[156.545px]" data-name="Paragraph">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#94a3b8] text-[12px] top-[0.56px] tracking-[0.25px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Location
      </p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="absolute h-[20px] left-0 top-[15.99px] w-[156.545px]" data-name="Paragraph">
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[20px] left-0 text-[#f8fafc] text-[14px] top-[0.67px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Ground Floor Commons
      </p>
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[35.99px] relative shrink-0 w-[156.545px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph5 />
        <Paragraph6 />
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute content-stretch flex gap-[7.995px] h-[35.99px] items-center left-[565.77px] top-0 w-[266.892px]" data-name="Container">
      <Icon3 />
      <Container11 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[13.993px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9931 13.9931">
        <g id="Icon">
          <path d={svgPaths.p327bbc80} id="Vector" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16609" />
          <path d={svgPaths.p198d3800} id="Vector_2" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16609" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="absolute h-[15.99px] left-0 top-0 w-[102.465px]" data-name="Paragraph">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#94a3b8] text-[12px] top-[0.56px] tracking-[0.25px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Child
      </p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="absolute h-[20px] left-0 top-[15.99px] w-[102.465px]" data-name="Paragraph">
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[20px] left-0 text-[#f8fafc] text-[14px] top-[0.67px] w-[103px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Male, 7-9 years
      </p>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[35.99px] relative shrink-0 w-[102.465px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph7 />
        <Paragraph8 />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute content-stretch flex gap-[7.995px] h-[35.99px] items-center left-[848.66px] top-0 w-[266.892px]" data-name="Container">
      <Icon4 />
      <Container13 />
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[35.99px] relative shrink-0 w-full" data-name="Container">
      <Container6 />
      <Container8 />
      <Container10 />
      <Container12 />
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[15.99px] relative shrink-0 w-[94.844px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#94a3b8] text-[12px] top-[0.56px] tracking-[0.25px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          1 minute ago
        </p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[28.542px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#1d283a] border-solid border-t-[0.556px] inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pt-[0.556px] relative size-full">
          <Paragraph9 />
        </div>
      </div>
    </div>
  );
}

function Vc() {
  return (
    <div className="h-[163px] relative shrink-0 w-[1253px]" data-name="VC">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[11.997px] items-start pt-[15.998px] px-[15.998px] relative size-full">
        <Container1 />
        <Container5 />
        <Container14 />
      </div>
    </div>
  );
}

function AlertCardAtChildSafety({ className }: { className?: string }) {
  return (
    <div className={className || "absolute bg-[#0f1729] content-stretch flex flex-col h-[164.627px] items-start left-0 pl-[3.889px] pr-[0.556px] py-[0.556px] rounded-[14px] top-[155px] w-[1257px]"} data-name="alert-card-at-child-safety">
      <div aria-hidden="true" className="absolute border-[#1d283a] border-b-[0.556px] border-l-[3.889px] border-r-[0.556px] border-solid border-t-[0.556px] inset-0 pointer-events-none rounded-[14px]" />
      <Vc />
    </div>
  );
}

function Icon5() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[62.5%_33.33%_12.5%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 6.66667">
            <path d={svgPaths.p6877e0} id="Vector" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[12.5%_45.83%_54.17%_20.83%]" data-name="Vector">
        <div className="absolute inset-[-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.33333 8.33333">
            <path d={svgPaths.p3ffa2780} id="Vector" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[63.04%_8.33%_12.5%_79.17%]" data-name="Vector">
        <div className="absolute inset-[-17.04%_-33.33%_-17.04%_-33.34%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.16687 6.55854">
            <path d={svgPaths.p39df7200} id="Vector" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[13.04%_20.8%_54.67%_66.67%]" data-name="Vector">
        <div className="absolute inset-[-12.91%_-33.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.1734 8.1254">
            <path d={svgPaths.p159fd500} id="Vector" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="bg-[#1d283a] relative rounded-[10px] shrink-0 size-[35.99px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[7.995px] px-[7.995px] relative size-full">
        <Icon5 />
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[27.005px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Roboto:SemiBold',sans-serif] font-semibold leading-[24px] left-0 text-[#f8fafc] text-[16px] top-[0.78px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Child–Adult Interaction
      </p>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[15.99px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[20px] left-[0.01px] text-[#94a3b8] text-[12px] top-[-4.24px] tracking-[0.25px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        ALT-1025
      </p>
    </div>
  );
}

function Container18() {
  return (
    <div className="flex-[1_0_0] h-[42.995px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading1 />
        <Paragraph10 />
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[42.995px] relative shrink-0 w-[236.623px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[11.997px] items-center relative size-full">
        <Container17 />
        <Container18 />
      </div>
    </div>
  );
}

function Badge() {
  return (
    <div className="bg-[#3364eb] relative rounded-[9999px] shrink-0" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start overflow-clip px-[8px] py-[2px] relative rounded-[inherit]">
        <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#f8fafc] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Acknowledged
        </p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[42.995px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex items-start justify-between relative size-full">
        <Container16 />
        <Badge />
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[13.993px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9931 13.9931">
        <g clipPath="url(#clip0_1_3736)" id="Icon">
          <path d={svgPaths.p215e6400} id="Vector" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16609" />
          <path d={svgPaths.p193aea80} id="Vector_2" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16609" />
        </g>
        <defs>
          <clipPath id="clip0_1_3736">
            <rect fill="white" height="13.9931" width="13.9931" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="absolute h-[15.99px] left-0 top-0 w-[48.307px]" data-name="Paragraph">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#94a3b8] text-[12px] top-[0.56px] tracking-[0.25px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Duration
      </p>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="absolute h-[20px] left-0 top-[15.99px] w-[48.307px]" data-name="Paragraph">
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[20px] left-0 text-[#f8fafc] text-[14px] top-[0.67px] w-[37px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        4 min
      </p>
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[35.99px] relative shrink-0 w-[48.307px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph11 />
        <Paragraph12 />
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute content-stretch flex gap-[7.995px] h-[35.99px] items-center left-0 top-0 w-[266.884px]" data-name="Container">
      <Icon6 />
      <Container21 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[13.993px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9931 13.9931">
        <g clipPath="url(#clip0_1_3648)" id="Icon">
          <path d={svgPaths.p38a73f00} id="Vector" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16609" />
          <path d={svgPaths.p10f6ea40} id="Vector_2" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16609" />
        </g>
        <defs>
          <clipPath id="clip0_1_3648">
            <rect fill="white" height="13.9931" width="13.9931" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="absolute h-[15.99px] left-0 top-0 w-[64.21px]" data-name="Paragraph">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#94a3b8] text-[12px] top-[0.56px] tracking-[0.25px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Camera
      </p>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="absolute h-[20px] left-0 top-[15.99px] w-[64.21px]" data-name="Paragraph">
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[20px] left-0 text-[#f8fafc] text-[14px] top-[0.67px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        CAM-203
      </p>
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[35.99px] relative shrink-0 w-[64.21px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph13 />
        <Paragraph14 />
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute content-stretch flex gap-[7.995px] h-[35.99px] items-center left-[282.88px] top-0 w-[266.892px]" data-name="Container">
      <Icon7 />
      <Container23 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[13.993px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9931 13.9931">
        <g clipPath="url(#clip0_1_3732)" id="Icon">
          <path d={svgPaths.p281fd980} id="Vector" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16609" />
          <path d={svgPaths.p206fb700} id="Vector_2" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16609" />
        </g>
        <defs>
          <clipPath id="clip0_1_3732">
            <rect fill="white" height="13.9931" width="13.9931" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="absolute h-[15.99px] left-0 top-0 w-[156.545px]" data-name="Paragraph">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#94a3b8] text-[12px] top-[0.56px] tracking-[0.25px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Location
      </p>
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="absolute h-[20px] left-0 top-[15.99px] w-[156.545px]" data-name="Paragraph">
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[20px] left-0 text-[#f8fafc] text-[14px] top-[0.67px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Ground Floor Commons
      </p>
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[35.99px] relative shrink-0 w-[156.545px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph15 />
        <Paragraph16 />
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute content-stretch flex gap-[7.995px] h-[35.99px] items-center left-[565.77px] top-0 w-[266.892px]" data-name="Container">
      <Icon8 />
      <Container25 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[13.993px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9931 13.9931">
        <g id="Icon">
          <path d={svgPaths.p327bbc80} id="Vector" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16609" />
          <path d={svgPaths.p198d3800} id="Vector_2" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16609" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="absolute h-[15.99px] left-0 top-0 w-[102.465px]" data-name="Paragraph">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#94a3b8] text-[12px] top-[0.56px] tracking-[0.25px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Child
      </p>
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="absolute h-[20px] left-0 top-[15.99px] w-[102.465px]" data-name="Paragraph">
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[20px] left-0 text-[#f8fafc] text-[14px] top-[0.67px] w-[103px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Male, 7-9 years
      </p>
    </div>
  );
}

function Container27() {
  return (
    <div className="h-[35.99px] relative shrink-0 w-[102.465px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph17 />
        <Paragraph18 />
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute content-stretch flex gap-[7.995px] h-[35.99px] items-center left-[848.66px] top-0 w-[266.892px]" data-name="Container">
      <Icon9 />
      <Container27 />
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[35.99px] relative shrink-0 w-full" data-name="Container">
      <Container20 />
      <Container22 />
      <Container24 />
      <Container26 />
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="h-[15.99px] relative shrink-0 w-[94.844px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#94a3b8] text-[12px] top-[0.56px] tracking-[0.25px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          3 minute ago
        </p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="h-[28.542px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#1d283a] border-solid border-t-[0.556px] inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pt-[0.556px] relative size-full">
          <Paragraph19 />
        </div>
      </div>
    </div>
  );
}

function Vc1() {
  return (
    <div className="h-[163px] relative shrink-0 w-[1253px]" data-name="VC">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[11.997px] items-start pt-[15.998px] px-[15.998px] relative size-full">
        <Container15 />
        <Container19 />
        <Container28 />
      </div>
    </div>
  );
}

function AlertCardAtChildSafety1() {
  return (
    <div className="absolute bg-[#0f1729] content-stretch flex flex-col h-[164.627px] items-start left-0 pl-[3.889px] pr-[0.556px] py-[0.556px] rounded-[14px] top-[331.63px] w-[1257px]" data-name="alert-card-at-child-safety">
      <div aria-hidden="true" className="absolute border-[#1d283a] border-b-[0.556px] border-l-[3.889px] border-r-[0.556px] border-solid border-t-[0.556px] inset-0 pointer-events-none rounded-[14px]" />
      <Vc1 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[62.5%_33.33%_12.5%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 6.66667">
            <path d={svgPaths.p6877e0} id="Vector" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[12.5%_45.83%_54.17%_20.83%]" data-name="Vector">
        <div className="absolute inset-[-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.33333 8.33333">
            <path d={svgPaths.p3ffa2780} id="Vector" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[63.04%_8.33%_12.5%_79.17%]" data-name="Vector">
        <div className="absolute inset-[-17.04%_-33.33%_-17.04%_-33.34%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.16687 6.55854">
            <path d={svgPaths.p39df7200} id="Vector" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[13.04%_20.8%_54.67%_66.67%]" data-name="Vector">
        <div className="absolute inset-[-12.91%_-33.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.1734 8.1254">
            <path d={svgPaths.p159fd500} id="Vector" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="bg-[#1d283a] relative rounded-[10px] shrink-0 size-[35.99px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[7.995px] px-[7.995px] relative size-full">
        <Icon10 />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[27.005px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Roboto:SemiBold',sans-serif] font-semibold leading-[24px] left-0 text-[#f8fafc] text-[16px] top-[0.78px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Unattended Child
      </p>
    </div>
  );
}

function Paragraph20() {
  return (
    <div className="h-[15.99px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[20px] left-[0.01px] text-[#94a3b8] text-[12px] top-[-4.24px] tracking-[0.25px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        ALT-1025
      </p>
    </div>
  );
}

function Container32() {
  return (
    <div className="flex-[1_0_0] h-[42.995px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading2 />
        <Paragraph20 />
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="h-[42.995px] relative shrink-0 w-[236.623px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[11.997px] items-center relative size-full">
        <Container31 />
        <Container32 />
      </div>
    </div>
  );
}

function Badge1() {
  return (
    <div className="bg-[#21c45d] relative rounded-[9999px] shrink-0" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start overflow-clip px-[8px] py-[2px] relative rounded-[inherit]">
        <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#f8fafc] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Resolved
        </p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="h-[42.995px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex items-start justify-between relative size-full">
        <Container30 />
        <Badge1 />
      </div>
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[13.993px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9931 13.9931">
        <g clipPath="url(#clip0_1_3736)" id="Icon">
          <path d={svgPaths.p215e6400} id="Vector" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16609" />
          <path d={svgPaths.p193aea80} id="Vector_2" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16609" />
        </g>
        <defs>
          <clipPath id="clip0_1_3736">
            <rect fill="white" height="13.9931" width="13.9931" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Paragraph21() {
  return (
    <div className="absolute h-[15.99px] left-0 top-0 w-[48.307px]" data-name="Paragraph">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#94a3b8] text-[12px] top-[0.56px] tracking-[0.25px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Duration
      </p>
    </div>
  );
}

function Paragraph22() {
  return (
    <div className="absolute h-[20px] left-0 top-[15.99px] w-[48.307px]" data-name="Paragraph">
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[20px] left-0 text-[#f8fafc] text-[14px] top-[0.67px] w-[37px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        4 min
      </p>
    </div>
  );
}

function Container35() {
  return (
    <div className="h-[35.99px] relative shrink-0 w-[48.307px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph21 />
        <Paragraph22 />
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute content-stretch flex gap-[7.995px] h-[35.99px] items-center left-0 top-0 w-[266.884px]" data-name="Container">
      <Icon11 />
      <Container35 />
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[13.993px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9931 13.9931">
        <g clipPath="url(#clip0_1_3648)" id="Icon">
          <path d={svgPaths.p38a73f00} id="Vector" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16609" />
          <path d={svgPaths.p10f6ea40} id="Vector_2" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16609" />
        </g>
        <defs>
          <clipPath id="clip0_1_3648">
            <rect fill="white" height="13.9931" width="13.9931" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Paragraph23() {
  return (
    <div className="absolute h-[15.99px] left-0 top-0 w-[64.21px]" data-name="Paragraph">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#94a3b8] text-[12px] top-[0.56px] tracking-[0.25px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Camera
      </p>
    </div>
  );
}

function Paragraph24() {
  return (
    <div className="absolute h-[20px] left-0 top-[15.99px] w-[64.21px]" data-name="Paragraph">
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[20px] left-0 text-[#f8fafc] text-[14px] top-[0.67px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        CAM-203
      </p>
    </div>
  );
}

function Container37() {
  return (
    <div className="h-[35.99px] relative shrink-0 w-[64.21px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph23 />
        <Paragraph24 />
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute content-stretch flex gap-[7.995px] h-[35.99px] items-center left-[282.88px] top-0 w-[266.892px]" data-name="Container">
      <Icon12 />
      <Container37 />
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[13.993px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9931 13.9931">
        <g clipPath="url(#clip0_1_3732)" id="Icon">
          <path d={svgPaths.p281fd980} id="Vector" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16609" />
          <path d={svgPaths.p206fb700} id="Vector_2" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16609" />
        </g>
        <defs>
          <clipPath id="clip0_1_3732">
            <rect fill="white" height="13.9931" width="13.9931" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Paragraph25() {
  return (
    <div className="absolute h-[15.99px] left-0 top-0 w-[156.545px]" data-name="Paragraph">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#94a3b8] text-[12px] top-[0.56px] tracking-[0.25px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Location
      </p>
    </div>
  );
}

function Paragraph26() {
  return (
    <div className="absolute h-[20px] left-0 top-[15.99px] w-[156.545px]" data-name="Paragraph">
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[20px] left-0 text-[#f8fafc] text-[14px] top-[0.67px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Ground Floor Commons
      </p>
    </div>
  );
}

function Container39() {
  return (
    <div className="h-[35.99px] relative shrink-0 w-[156.545px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph25 />
        <Paragraph26 />
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute content-stretch flex gap-[7.995px] h-[35.99px] items-center left-[565.77px] top-0 w-[266.892px]" data-name="Container">
      <Icon13 />
      <Container39 />
    </div>
  );
}

function Icon14() {
  return (
    <div className="relative shrink-0 size-[13.993px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9931 13.9931">
        <g id="Icon">
          <path d={svgPaths.p327bbc80} id="Vector" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16609" />
          <path d={svgPaths.p198d3800} id="Vector_2" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16609" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph27() {
  return (
    <div className="absolute h-[15.99px] left-0 top-0 w-[102.465px]" data-name="Paragraph">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#94a3b8] text-[12px] top-[0.56px] tracking-[0.25px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Child
      </p>
    </div>
  );
}

function Paragraph28() {
  return (
    <div className="absolute h-[20px] left-0 top-[15.99px] w-[102.465px]" data-name="Paragraph">
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[20px] left-0 text-[#f8fafc] text-[14px] top-[0.67px] w-[103px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Male, 7-9 years
      </p>
    </div>
  );
}

function Container41() {
  return (
    <div className="h-[35.99px] relative shrink-0 w-[102.465px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph27 />
        <Paragraph28 />
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute content-stretch flex gap-[7.995px] h-[35.99px] items-center left-[848.66px] top-0 w-[266.892px]" data-name="Container">
      <Icon14 />
      <Container41 />
    </div>
  );
}

function Container33() {
  return (
    <div className="h-[35.99px] relative shrink-0 w-full" data-name="Container">
      <Container34 />
      <Container36 />
      <Container38 />
      <Container40 />
    </div>
  );
}

function Paragraph29() {
  return (
    <div className="h-[15.99px] relative shrink-0 w-[94.844px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#94a3b8] text-[12px] top-[0.56px] tracking-[0.25px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          8 minute ago
        </p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="h-[28.542px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#1d283a] border-solid border-t-[0.556px] inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pt-[0.556px] relative size-full">
          <Paragraph29 />
        </div>
      </div>
    </div>
  );
}

function Vc2() {
  return (
    <div className="h-[163px] relative shrink-0 w-[1253px]" data-name="VC">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[11.997px] items-start pt-[15.998px] px-[15.998px] relative size-full">
        <Container29 />
        <Container33 />
        <Container42 />
      </div>
    </div>
  );
}

function AlertCardAtChildSafety2() {
  return (
    <div className="absolute bg-[#0f1729] content-stretch flex flex-col h-[164.627px] items-start left-0 pl-[3.889px] pr-[0.556px] py-[0.556px] rounded-[14px] top-[508.25px] w-[1257px]" data-name="alert-card-at-child-safety">
      <div aria-hidden="true" className="absolute border-[#1d283a] border-b-[0.556px] border-l-[3.889px] border-r-[0.556px] border-solid border-t-[0.556px] inset-0 pointer-events-none rounded-[14px]" />
      <Vc2 />
    </div>
  );
}

function Icon15() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[62.5%_33.33%_12.5%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 6.66667">
            <path d={svgPaths.p6877e0} id="Vector" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[12.5%_45.83%_54.17%_20.83%]" data-name="Vector">
        <div className="absolute inset-[-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.33333 8.33333">
            <path d={svgPaths.p3ffa2780} id="Vector" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[63.04%_8.33%_12.5%_79.17%]" data-name="Vector">
        <div className="absolute inset-[-17.04%_-33.33%_-17.04%_-33.34%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.16687 6.55854">
            <path d={svgPaths.p39df7200} id="Vector" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[13.04%_20.8%_54.67%_66.67%]" data-name="Vector">
        <div className="absolute inset-[-12.91%_-33.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.1734 8.1254">
            <path d={svgPaths.p159fd500} id="Vector" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="bg-[#1d283a] relative rounded-[10px] shrink-0 size-[35.99px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[7.995px] px-[7.995px] relative size-full">
        <Icon15 />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[27.005px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Roboto:SemiBold',sans-serif] font-semibold leading-[24px] left-0 text-[#f8fafc] text-[16px] top-[0.78px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Child–Adult Interaction
      </p>
    </div>
  );
}

function Paragraph30() {
  return (
    <div className="h-[15.99px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[20px] left-[0.01px] text-[#94a3b8] text-[12px] top-[-4.24px] tracking-[0.25px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        ALT-1025
      </p>
    </div>
  );
}

function Container46() {
  return (
    <div className="flex-[1_0_0] h-[42.995px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading3 />
        <Paragraph30 />
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="h-[42.995px] relative shrink-0 w-[236.623px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[11.997px] items-center relative size-full">
        <Container45 />
        <Container46 />
      </div>
    </div>
  );
}

function Badge2() {
  return (
    <div className="bg-[#fbbd23] relative rounded-[9999px] shrink-0" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start overflow-clip px-[8px] py-[2px] relative rounded-[inherit]">
        <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#f8fafc] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Pending
        </p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="h-[42.995px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex items-start justify-between relative size-full">
        <Container44 />
        <Badge2 />
      </div>
    </div>
  );
}

function Icon16() {
  return (
    <div className="relative shrink-0 size-[13.993px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9931 13.9931">
        <g clipPath="url(#clip0_1_3736)" id="Icon">
          <path d={svgPaths.p215e6400} id="Vector" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16609" />
          <path d={svgPaths.p193aea80} id="Vector_2" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16609" />
        </g>
        <defs>
          <clipPath id="clip0_1_3736">
            <rect fill="white" height="13.9931" width="13.9931" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Paragraph31() {
  return (
    <div className="absolute h-[15.99px] left-0 top-0 w-[48.307px]" data-name="Paragraph">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#94a3b8] text-[12px] top-[0.56px] tracking-[0.25px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Duration
      </p>
    </div>
  );
}

function Paragraph32() {
  return (
    <div className="absolute h-[20px] left-0 top-[15.99px] w-[48.307px]" data-name="Paragraph">
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[20px] left-0 text-[#f8fafc] text-[14px] top-[0.67px] w-[37px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        4 min
      </p>
    </div>
  );
}

function Container49() {
  return (
    <div className="h-[35.99px] relative shrink-0 w-[48.307px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph31 />
        <Paragraph32 />
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="absolute content-stretch flex gap-[7.995px] h-[35.99px] items-center left-0 top-0 w-[266.884px]" data-name="Container">
      <Icon16 />
      <Container49 />
    </div>
  );
}

function Icon17() {
  return (
    <div className="relative shrink-0 size-[13.993px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9931 13.9931">
        <g clipPath="url(#clip0_1_3648)" id="Icon">
          <path d={svgPaths.p38a73f00} id="Vector" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16609" />
          <path d={svgPaths.p10f6ea40} id="Vector_2" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16609" />
        </g>
        <defs>
          <clipPath id="clip0_1_3648">
            <rect fill="white" height="13.9931" width="13.9931" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Paragraph33() {
  return (
    <div className="absolute h-[15.99px] left-0 top-0 w-[64.21px]" data-name="Paragraph">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#94a3b8] text-[12px] top-[0.56px] tracking-[0.25px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Camera
      </p>
    </div>
  );
}

function Paragraph34() {
  return (
    <div className="absolute h-[20px] left-0 top-[15.99px] w-[64.21px]" data-name="Paragraph">
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[20px] left-0 text-[#f8fafc] text-[14px] top-[0.67px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        CAM-203
      </p>
    </div>
  );
}

function Container51() {
  return (
    <div className="h-[35.99px] relative shrink-0 w-[64.21px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph33 />
        <Paragraph34 />
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="absolute content-stretch flex gap-[7.995px] h-[35.99px] items-center left-[282.88px] top-0 w-[266.892px]" data-name="Container">
      <Icon17 />
      <Container51 />
    </div>
  );
}

function Icon18() {
  return (
    <div className="relative shrink-0 size-[13.993px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9931 13.9931">
        <g clipPath="url(#clip0_1_3732)" id="Icon">
          <path d={svgPaths.p281fd980} id="Vector" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16609" />
          <path d={svgPaths.p206fb700} id="Vector_2" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16609" />
        </g>
        <defs>
          <clipPath id="clip0_1_3732">
            <rect fill="white" height="13.9931" width="13.9931" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Paragraph35() {
  return (
    <div className="absolute h-[15.99px] left-0 top-0 w-[156.545px]" data-name="Paragraph">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#94a3b8] text-[12px] top-[0.56px] tracking-[0.25px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Location
      </p>
    </div>
  );
}

function Paragraph36() {
  return (
    <div className="absolute h-[20px] left-0 top-[15.99px] w-[156.545px]" data-name="Paragraph">
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[20px] left-0 text-[#f8fafc] text-[14px] top-[0.67px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Ground Floor Commons
      </p>
    </div>
  );
}

function Container53() {
  return (
    <div className="h-[35.99px] relative shrink-0 w-[156.545px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph35 />
        <Paragraph36 />
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="absolute content-stretch flex gap-[7.995px] h-[35.99px] items-center left-[565.77px] top-0 w-[266.892px]" data-name="Container">
      <Icon18 />
      <Container53 />
    </div>
  );
}

function Icon19() {
  return (
    <div className="relative shrink-0 size-[13.993px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9931 13.9931">
        <g id="Icon">
          <path d={svgPaths.p327bbc80} id="Vector" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16609" />
          <path d={svgPaths.p198d3800} id="Vector_2" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16609" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph37() {
  return (
    <div className="absolute h-[15.99px] left-0 top-0 w-[102.465px]" data-name="Paragraph">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#94a3b8] text-[12px] top-[0.56px] tracking-[0.25px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Child
      </p>
    </div>
  );
}

function Paragraph38() {
  return (
    <div className="absolute h-[20px] left-0 top-[15.99px] w-[102.465px]" data-name="Paragraph">
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[20px] left-0 text-[#f8fafc] text-[14px] top-[0.67px] w-[103px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Male, 7-9 years
      </p>
    </div>
  );
}

function Container55() {
  return (
    <div className="h-[35.99px] relative shrink-0 w-[102.465px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph37 />
        <Paragraph38 />
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="absolute content-stretch flex gap-[7.995px] h-[35.99px] items-center left-[848.66px] top-0 w-[266.892px]" data-name="Container">
      <Icon19 />
      <Container55 />
    </div>
  );
}

function Container47() {
  return (
    <div className="h-[35.99px] relative shrink-0 w-full" data-name="Container">
      <Container48 />
      <Container50 />
      <Container52 />
      <Container54 />
    </div>
  );
}

function Paragraph39() {
  return (
    <div className="h-[15.99px] relative shrink-0 w-[94.844px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#94a3b8] text-[12px] top-[0.56px] tracking-[0.25px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          30 minute ago
        </p>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="h-[28.542px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#1d283a] border-solid border-t-[0.556px] inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pt-[0.556px] relative size-full">
          <Paragraph39 />
        </div>
      </div>
    </div>
  );
}

function Vc3() {
  return (
    <div className="h-[163px] relative shrink-0 w-[1253px]" data-name="VC">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[11.997px] items-start pt-[15.998px] px-[15.998px] relative size-full">
        <Container43 />
        <Container47 />
        <Container56 />
      </div>
    </div>
  );
}

function AlertCardAtChildSafety3() {
  return (
    <div className="absolute bg-[#0f1729] content-stretch flex flex-col h-[164.627px] items-start left-0 pl-[3.889px] pr-[0.556px] py-[0.556px] rounded-[14px] top-[684.87px] w-[1257px]" data-name="alert-card-at-child-safety">
      <div aria-hidden="true" className="absolute border-[#1d283a] border-b-[0.556px] border-l-[3.889px] border-r-[0.556px] border-solid border-t-[0.556px] inset-0 pointer-events-none rounded-[14px]" />
      <Vc3 />
    </div>
  );
}

function Icon20() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[62.5%_33.33%_12.5%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 6.66667">
            <path d={svgPaths.p6877e0} id="Vector" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[12.5%_45.83%_54.17%_20.83%]" data-name="Vector">
        <div className="absolute inset-[-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.33333 8.33333">
            <path d={svgPaths.p3ffa2780} id="Vector" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[63.04%_8.33%_12.5%_79.17%]" data-name="Vector">
        <div className="absolute inset-[-17.04%_-33.33%_-17.04%_-33.34%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.16687 6.55854">
            <path d={svgPaths.p39df7200} id="Vector" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[13.04%_20.8%_54.67%_66.67%]" data-name="Vector">
        <div className="absolute inset-[-12.91%_-33.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.1734 8.1254">
            <path d={svgPaths.p159fd500} id="Vector" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="bg-[#1d283a] relative rounded-[10px] shrink-0 size-[35.99px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[7.995px] px-[7.995px] relative size-full">
        <Icon20 />
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[27.005px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Roboto:SemiBold',sans-serif] font-semibold leading-[24px] left-0 text-[#f8fafc] text-[16px] top-[0.78px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Unattended Child
      </p>
    </div>
  );
}

function Paragraph40() {
  return (
    <div className="h-[15.99px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[20px] left-[0.01px] text-[#94a3b8] text-[12px] top-[-4.24px] tracking-[0.25px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        ALT-1025
      </p>
    </div>
  );
}

function Container60() {
  return (
    <div className="flex-[1_0_0] h-[42.995px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading4 />
        <Paragraph40 />
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="h-[42.995px] relative shrink-0 w-[236.623px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[11.997px] items-center relative size-full">
        <Container59 />
        <Container60 />
      </div>
    </div>
  );
}

function Badge3() {
  return (
    <div className="bg-[#fbbd23] relative rounded-[9999px] shrink-0" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start overflow-clip px-[8px] py-[2px] relative rounded-[inherit]">
        <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#f8fafc] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Pending
        </p>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="h-[42.995px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex items-start justify-between relative size-full">
        <Container58 />
        <Badge3 />
      </div>
    </div>
  );
}

function Icon21() {
  return (
    <div className="relative shrink-0 size-[13.993px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9931 13.9931">
        <g clipPath="url(#clip0_1_3736)" id="Icon">
          <path d={svgPaths.p215e6400} id="Vector" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16609" />
          <path d={svgPaths.p193aea80} id="Vector_2" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16609" />
        </g>
        <defs>
          <clipPath id="clip0_1_3736">
            <rect fill="white" height="13.9931" width="13.9931" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Paragraph41() {
  return (
    <div className="absolute h-[15.99px] left-0 top-0 w-[48.307px]" data-name="Paragraph">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#94a3b8] text-[12px] top-[0.56px] tracking-[0.25px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Duration
      </p>
    </div>
  );
}

function Paragraph42() {
  return (
    <div className="absolute h-[20px] left-0 top-[15.99px] w-[48.307px]" data-name="Paragraph">
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[20px] left-0 text-[#f8fafc] text-[14px] top-[0.67px] w-[37px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        4 min
      </p>
    </div>
  );
}

function Container63() {
  return (
    <div className="h-[35.99px] relative shrink-0 w-[48.307px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph41 />
        <Paragraph42 />
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="absolute content-stretch flex gap-[7.995px] h-[35.99px] items-center left-0 top-0 w-[266.884px]" data-name="Container">
      <Icon21 />
      <Container63 />
    </div>
  );
}

function Icon22() {
  return (
    <div className="relative shrink-0 size-[13.993px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9931 13.9931">
        <g clipPath="url(#clip0_1_3648)" id="Icon">
          <path d={svgPaths.p38a73f00} id="Vector" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16609" />
          <path d={svgPaths.p10f6ea40} id="Vector_2" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16609" />
        </g>
        <defs>
          <clipPath id="clip0_1_3648">
            <rect fill="white" height="13.9931" width="13.9931" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Paragraph43() {
  return (
    <div className="absolute h-[15.99px] left-0 top-0 w-[64.21px]" data-name="Paragraph">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#94a3b8] text-[12px] top-[0.56px] tracking-[0.25px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Camera
      </p>
    </div>
  );
}

function Paragraph44() {
  return (
    <div className="absolute h-[20px] left-0 top-[15.99px] w-[64.21px]" data-name="Paragraph">
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[20px] left-0 text-[#f8fafc] text-[14px] top-[0.67px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        CAM-203
      </p>
    </div>
  );
}

function Container65() {
  return (
    <div className="h-[35.99px] relative shrink-0 w-[64.21px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph43 />
        <Paragraph44 />
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="absolute content-stretch flex gap-[7.995px] h-[35.99px] items-center left-[282.88px] top-0 w-[266.892px]" data-name="Container">
      <Icon22 />
      <Container65 />
    </div>
  );
}

function Icon23() {
  return (
    <div className="relative shrink-0 size-[13.993px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9931 13.9931">
        <g clipPath="url(#clip0_1_3732)" id="Icon">
          <path d={svgPaths.p281fd980} id="Vector" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16609" />
          <path d={svgPaths.p206fb700} id="Vector_2" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16609" />
        </g>
        <defs>
          <clipPath id="clip0_1_3732">
            <rect fill="white" height="13.9931" width="13.9931" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Paragraph45() {
  return (
    <div className="absolute h-[15.99px] left-0 top-0 w-[156.545px]" data-name="Paragraph">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#94a3b8] text-[12px] top-[0.56px] tracking-[0.25px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Location
      </p>
    </div>
  );
}

function Paragraph46() {
  return (
    <div className="absolute h-[20px] left-0 top-[15.99px] w-[156.545px]" data-name="Paragraph">
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[20px] left-0 text-[#f8fafc] text-[14px] top-[0.67px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Ground Floor Commons
      </p>
    </div>
  );
}

function Container67() {
  return (
    <div className="h-[35.99px] relative shrink-0 w-[156.545px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph45 />
        <Paragraph46 />
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="absolute content-stretch flex gap-[7.995px] h-[35.99px] items-center left-[565.77px] top-0 w-[266.892px]" data-name="Container">
      <Icon23 />
      <Container67 />
    </div>
  );
}

function Icon24() {
  return (
    <div className="relative shrink-0 size-[13.993px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9931 13.9931">
        <g id="Icon">
          <path d={svgPaths.p327bbc80} id="Vector" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16609" />
          <path d={svgPaths.p198d3800} id="Vector_2" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16609" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph47() {
  return (
    <div className="absolute h-[15.99px] left-0 top-0 w-[102.465px]" data-name="Paragraph">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#94a3b8] text-[12px] top-[0.56px] tracking-[0.25px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Child
      </p>
    </div>
  );
}

function Paragraph48() {
  return (
    <div className="absolute h-[20px] left-0 top-[15.99px] w-[102.465px]" data-name="Paragraph">
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[20px] left-0 text-[#f8fafc] text-[14px] top-[0.67px] w-[103px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Male, 7-9 years
      </p>
    </div>
  );
}

function Container69() {
  return (
    <div className="h-[35.99px] relative shrink-0 w-[102.465px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph47 />
        <Paragraph48 />
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="absolute content-stretch flex gap-[7.995px] h-[35.99px] items-center left-[848.66px] top-0 w-[266.892px]" data-name="Container">
      <Icon24 />
      <Container69 />
    </div>
  );
}

function Container61() {
  return (
    <div className="h-[35.99px] relative shrink-0 w-full" data-name="Container">
      <Container62 />
      <Container64 />
      <Container66 />
      <Container68 />
    </div>
  );
}

function Paragraph49() {
  return (
    <div className="h-[15.99px] relative shrink-0 w-[94.844px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#94a3b8] text-[12px] top-[0.56px] tracking-[0.25px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          1 hour ago
        </p>
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div className="h-[28.542px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#1d283a] border-solid border-t-[0.556px] inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pt-[0.556px] relative size-full">
          <Paragraph49 />
        </div>
      </div>
    </div>
  );
}

function Vc4() {
  return (
    <div className="h-[163px] relative shrink-0 w-[1253px]" data-name="VC">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[11.997px] items-start pt-[15.998px] px-[15.998px] relative size-full">
        <Container57 />
        <Container61 />
        <Container70 />
      </div>
    </div>
  );
}

function AlertCardAtChildSafety4() {
  return (
    <div className="absolute bg-[#0f1729] content-stretch flex flex-col h-[164.627px] items-start left-0 pl-[3.889px] pr-[0.556px] py-[0.556px] rounded-[14px] top-[861.49px] w-[1257px]" data-name="alert-card-at-child-safety">
      <div aria-hidden="true" className="absolute border-[#1d283a] border-b-[0.556px] border-l-[3.889px] border-r-[0.556px] border-solid border-t-[0.556px] inset-0 pointer-events-none rounded-[14px]" />
      <Vc4 />
    </div>
  );
}

function Icon25() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[62.5%_33.33%_12.5%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 6.66667">
            <path d={svgPaths.p6877e0} id="Vector" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[12.5%_45.83%_54.17%_20.83%]" data-name="Vector">
        <div className="absolute inset-[-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.33333 8.33333">
            <path d={svgPaths.p3ffa2780} id="Vector" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[63.04%_8.33%_12.5%_79.17%]" data-name="Vector">
        <div className="absolute inset-[-17.04%_-33.33%_-17.04%_-33.34%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.16687 6.55854">
            <path d={svgPaths.p39df7200} id="Vector" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[13.04%_20.8%_54.67%_66.67%]" data-name="Vector">
        <div className="absolute inset-[-12.91%_-33.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.1734 8.1254">
            <path d={svgPaths.p159fd500} id="Vector" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="bg-[#1d283a] relative rounded-[10px] shrink-0 size-[35.99px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[7.995px] px-[7.995px] relative size-full">
        <Icon25 />
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="h-[27.005px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Roboto:SemiBold',sans-serif] font-semibold leading-[24px] left-0 text-[#f8fafc] text-[16px] top-[0.78px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Child–Adult Interaction
      </p>
    </div>
  );
}

function Paragraph50() {
  return (
    <div className="h-[15.99px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[20px] left-[0.01px] text-[#94a3b8] text-[12px] top-[-4.24px] tracking-[0.25px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        ALT-1025
      </p>
    </div>
  );
}

function Container74() {
  return (
    <div className="flex-[1_0_0] h-[42.995px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading5 />
        <Paragraph50 />
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="h-[42.995px] relative shrink-0 w-[236.623px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[11.997px] items-center relative size-full">
        <Container73 />
        <Container74 />
      </div>
    </div>
  );
}

function Badge4() {
  return (
    <div className="bg-[#21c45d] relative rounded-[9999px] shrink-0" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start overflow-clip px-[8px] py-[2px] relative rounded-[inherit]">
        <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#f8fafc] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Resolved
        </p>
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="h-[42.995px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex items-start justify-between relative size-full">
        <Container72 />
        <Badge4 />
      </div>
    </div>
  );
}

function Icon26() {
  return (
    <div className="relative shrink-0 size-[13.993px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9931 13.9931">
        <g clipPath="url(#clip0_1_3736)" id="Icon">
          <path d={svgPaths.p215e6400} id="Vector" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16609" />
          <path d={svgPaths.p193aea80} id="Vector_2" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16609" />
        </g>
        <defs>
          <clipPath id="clip0_1_3736">
            <rect fill="white" height="13.9931" width="13.9931" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Paragraph51() {
  return (
    <div className="absolute h-[15.99px] left-0 top-0 w-[48.307px]" data-name="Paragraph">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#94a3b8] text-[12px] top-[0.56px] tracking-[0.25px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Duration
      </p>
    </div>
  );
}

function Paragraph52() {
  return (
    <div className="absolute h-[20px] left-0 top-[15.99px] w-[48.307px]" data-name="Paragraph">
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[20px] left-0 text-[#f8fafc] text-[14px] top-[0.67px] w-[37px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        4 min
      </p>
    </div>
  );
}

function Container77() {
  return (
    <div className="h-[35.99px] relative shrink-0 w-[48.307px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph51 />
        <Paragraph52 />
      </div>
    </div>
  );
}

function Container76() {
  return (
    <div className="absolute content-stretch flex gap-[7.995px] h-[35.99px] items-center left-0 top-0 w-[266.884px]" data-name="Container">
      <Icon26 />
      <Container77 />
    </div>
  );
}

function Icon27() {
  return (
    <div className="relative shrink-0 size-[13.993px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9931 13.9931">
        <g clipPath="url(#clip0_1_3648)" id="Icon">
          <path d={svgPaths.p38a73f00} id="Vector" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16609" />
          <path d={svgPaths.p10f6ea40} id="Vector_2" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16609" />
        </g>
        <defs>
          <clipPath id="clip0_1_3648">
            <rect fill="white" height="13.9931" width="13.9931" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Paragraph53() {
  return (
    <div className="absolute h-[15.99px] left-0 top-0 w-[64.21px]" data-name="Paragraph">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#94a3b8] text-[12px] top-[0.56px] tracking-[0.25px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Camera
      </p>
    </div>
  );
}

function Paragraph54() {
  return (
    <div className="absolute h-[20px] left-0 top-[15.99px] w-[64.21px]" data-name="Paragraph">
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[20px] left-0 text-[#f8fafc] text-[14px] top-[0.67px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        CAM-203
      </p>
    </div>
  );
}

function Container79() {
  return (
    <div className="h-[35.99px] relative shrink-0 w-[64.21px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph53 />
        <Paragraph54 />
      </div>
    </div>
  );
}

function Container78() {
  return (
    <div className="absolute content-stretch flex gap-[7.995px] h-[35.99px] items-center left-[282.88px] top-0 w-[266.892px]" data-name="Container">
      <Icon27 />
      <Container79 />
    </div>
  );
}

function Icon28() {
  return (
    <div className="relative shrink-0 size-[13.993px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9931 13.9931">
        <g clipPath="url(#clip0_1_3732)" id="Icon">
          <path d={svgPaths.p281fd980} id="Vector" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16609" />
          <path d={svgPaths.p206fb700} id="Vector_2" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16609" />
        </g>
        <defs>
          <clipPath id="clip0_1_3732">
            <rect fill="white" height="13.9931" width="13.9931" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Paragraph55() {
  return (
    <div className="absolute h-[15.99px] left-0 top-0 w-[156.545px]" data-name="Paragraph">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#94a3b8] text-[12px] top-[0.56px] tracking-[0.25px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Location
      </p>
    </div>
  );
}

function Paragraph56() {
  return (
    <div className="absolute h-[20px] left-0 top-[15.99px] w-[156.545px]" data-name="Paragraph">
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[20px] left-0 text-[#f8fafc] text-[14px] top-[0.67px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Ground Floor Commons
      </p>
    </div>
  );
}

function Container81() {
  return (
    <div className="h-[35.99px] relative shrink-0 w-[156.545px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph55 />
        <Paragraph56 />
      </div>
    </div>
  );
}

function Container80() {
  return (
    <div className="absolute content-stretch flex gap-[7.995px] h-[35.99px] items-center left-[565.77px] top-0 w-[266.892px]" data-name="Container">
      <Icon28 />
      <Container81 />
    </div>
  );
}

function Icon29() {
  return (
    <div className="relative shrink-0 size-[13.993px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9931 13.9931">
        <g id="Icon">
          <path d={svgPaths.p327bbc80} id="Vector" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16609" />
          <path d={svgPaths.p198d3800} id="Vector_2" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16609" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph57() {
  return (
    <div className="absolute h-[15.99px] left-0 top-0 w-[102.465px]" data-name="Paragraph">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#94a3b8] text-[12px] top-[0.56px] tracking-[0.25px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Child
      </p>
    </div>
  );
}

function Paragraph58() {
  return (
    <div className="absolute h-[20px] left-0 top-[15.99px] w-[102.465px]" data-name="Paragraph">
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[20px] left-0 text-[#f8fafc] text-[14px] top-[0.67px] w-[103px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Male, 7-9 years
      </p>
    </div>
  );
}

function Container83() {
  return (
    <div className="h-[35.99px] relative shrink-0 w-[102.465px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph57 />
        <Paragraph58 />
      </div>
    </div>
  );
}

function Container82() {
  return (
    <div className="absolute content-stretch flex gap-[7.995px] h-[35.99px] items-center left-[848.66px] top-0 w-[266.892px]" data-name="Container">
      <Icon29 />
      <Container83 />
    </div>
  );
}

function Container75() {
  return (
    <div className="h-[35.99px] relative shrink-0 w-full" data-name="Container">
      <Container76 />
      <Container78 />
      <Container80 />
      <Container82 />
    </div>
  );
}

function Paragraph59() {
  return (
    <div className="h-[15.99px] relative shrink-0 w-[94.844px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#94a3b8] text-[12px] top-[0.56px] tracking-[0.25px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          3 hours ago
        </p>
      </div>
    </div>
  );
}

function Container84() {
  return (
    <div className="h-[28.542px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#1d283a] border-solid border-t-[0.556px] inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pt-[0.556px] relative size-full">
          <Paragraph59 />
        </div>
      </div>
    </div>
  );
}

function Vc5() {
  return (
    <div className="h-[163px] relative shrink-0 w-[1253px]" data-name="VC">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[11.997px] items-start pt-[15.998px] px-[15.998px] relative size-full">
        <Container71 />
        <Container75 />
        <Container84 />
      </div>
    </div>
  );
}

function AlertCardAtChildSafety5() {
  return (
    <div className="absolute bg-[#0f1729] content-stretch flex flex-col h-[164.627px] items-start left-0 pl-[3.889px] pr-[0.556px] py-[0.556px] rounded-[14px] top-[1038.12px] w-[1257px]" data-name="alert-card-at-child-safety">
      <div aria-hidden="true" className="absolute border-[#1d283a] border-b-[0.556px] border-l-[3.889px] border-r-[0.556px] border-solid border-t-[0.556px] inset-0 pointer-events-none rounded-[14px]" />
      <Vc5 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-0 top-[155px]">
      <AlertCardAtChildSafety />
      <AlertCardAtChildSafety1 />
      <AlertCardAtChildSafety2 />
      <AlertCardAtChildSafety3 />
      <AlertCardAtChildSafety4 />
      <AlertCardAtChildSafety5 />
    </div>
  );
}

function Container85() {
  return (
    <div className="-translate-y-1/2 absolute h-[20px] left-[4px] overflow-clip top-1/2 w-[100px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[17px] justify-center leading-[0] left-[10px] text-[#f8fafc] text-[14px] text-left top-[9.5px] tracking-[0.25px] w-[100px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre-wrap">All Events</p>
      </div>
    </div>
  );
}

function Svg() {
  return (
    <div className="-translate-y-1/2 absolute left-[146px] size-[16px] top-1/2" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <rect height="15" stroke="var(--stroke-0, #0F1729)" width="15" x="0.5" y="0.5" />
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function SelectTitle() {
  return (
    <div className="absolute bg-[#0f1729] border border-[#1d283a] border-solid h-[40px] left-0 right-[0.24px] rounded-[6px] top-0" data-name="select-title">
      <Container85 />
      <Svg />
    </div>
  );
}

function Container86() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[calc(50%-81px)] text-[#f8fafc] text-[14px] text-left top-1/2 w-[162px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre-wrap">{`        Hour (3 days)`}</p>
      </div>
    </div>
  );
}

function Container87() {
  return (
    <div className="-translate-y-1/2 absolute font-['Roboto:Regular',sans-serif] font-normal h-[20px] leading-[0] left-[32px] overflow-clip text-[#f8fafc] text-[14px] text-left top-1/2 w-[140px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col h-[17px] justify-center left-0 top-[9.5px] w-[130px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[13.5px] whitespace-pre-wrap">Day (30 days)</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col h-[17px] justify-center left-0 top-[9.5px] w-[130px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[13.5px] whitespace-pre-wrap">Day (30 days)</p>
      </div>
    </div>
  );
}

function MaterialSymbolsCheck() {
  return (
    <div className="-translate-y-1/2 absolute left-[10px] size-[16px] top-1/2" data-name="material-symbols:check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="material-symbols:check">
          <path d={svgPaths.p6d6f031} fill="var(--fill-0, #F8FAFC)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Combobox() {
  return (
    <div className="bg-[#3364eb] h-[34px] relative rounded-[6px] shrink-0 w-full" data-name="Combobox">
      <div aria-hidden="true" className="absolute border border-[#1d283a] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <Container87 />
      <MaterialSymbolsCheck />
    </div>
  );
}

function Container88() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[calc(50%-81px)] text-[#f8fafc] text-[14px] text-left top-1/2 w-[162px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre-wrap">{`       Week (12 weeks)`}</p>
      </div>
    </div>
  );
}

function Container89() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[calc(50%-81px)] text-[#f8fafc] text-[14px] text-left top-1/2 w-[162px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre-wrap">{`       Month (12 months)`}</p>
      </div>
    </div>
  );
}

function SelectWithOptions() {
  return (
    <div className="absolute bg-[#0f1729] content-stretch flex flex-col gap-[10px] items-start left-0 p-[3px] right-0 rounded-[6px] top-[57px]" data-name="select-with-options">
      <div aria-hidden="true" className="absolute border border-[#1d283a] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <Container86 />
      <Combobox />
      <Container88 />
      <Container89 />
    </div>
  );
}

function Container90() {
  return (
    <div className="-translate-y-1/2 absolute h-[20px] left-[4px] overflow-clip top-1/2 w-[100px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[17px] justify-center leading-[0] left-[10px] text-[#f8fafc] text-[14px] text-left top-[9.5px] tracking-[0.25px] w-[100px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre-wrap">All Zones</p>
      </div>
    </div>
  );
}

function Svg1() {
  return (
    <div className="-translate-y-1/2 absolute left-[146px] size-[16px] top-1/2" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <rect height="15" stroke="var(--stroke-0, #0F1729)" width="15" x="0.5" y="0.5" />
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function SelectTitle1() {
  return (
    <div className="absolute bg-[#0f1729] border border-[#1d283a] border-solid h-[40px] left-0 right-[0.24px] rounded-[6px] top-0" data-name="select-title">
      <Container90 />
      <Svg1 />
    </div>
  );
}

function Container91() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[calc(50%-81px)] text-[#f8fafc] text-[14px] text-left top-1/2 w-[162px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre-wrap">{`        Hour (3 days)`}</p>
      </div>
    </div>
  );
}

function Container92() {
  return (
    <div className="-translate-y-1/2 absolute font-['Roboto:Regular',sans-serif] font-normal h-[20px] leading-[0] left-[32px] overflow-clip text-[#f8fafc] text-[14px] text-left top-1/2 w-[140px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col h-[17px] justify-center left-0 top-[9.5px] w-[130px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[13.5px] whitespace-pre-wrap">Day (30 days)</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col h-[17px] justify-center left-0 top-[9.5px] w-[130px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[13.5px] whitespace-pre-wrap">Day (30 days)</p>
      </div>
    </div>
  );
}

function MaterialSymbolsCheck1() {
  return (
    <div className="-translate-y-1/2 absolute left-[10px] size-[16px] top-1/2" data-name="material-symbols:check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="material-symbols:check">
          <path d={svgPaths.p6d6f031} fill="var(--fill-0, #F8FAFC)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Combobox1() {
  return (
    <div className="bg-[#3364eb] h-[34px] relative rounded-[6px] shrink-0 w-full" data-name="Combobox">
      <div aria-hidden="true" className="absolute border border-[#1d283a] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <Container92 />
      <MaterialSymbolsCheck1 />
    </div>
  );
}

function Container93() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[calc(50%-81px)] text-[#f8fafc] text-[14px] text-left top-1/2 w-[162px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre-wrap">{`       Week (12 weeks)`}</p>
      </div>
    </div>
  );
}

function Container94() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[calc(50%-81px)] text-[#f8fafc] text-[14px] text-left top-1/2 w-[162px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre-wrap">{`       Month (12 months)`}</p>
      </div>
    </div>
  );
}

function SelectWithOptions1() {
  return (
    <div className="absolute bg-[#0f1729] content-stretch flex flex-col gap-[10px] items-start left-0 p-[3px] right-0 rounded-[6px] top-[57px]" data-name="select-with-options">
      <div aria-hidden="true" className="absolute border border-[#1d283a] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <Container91 />
      <Combobox1 />
      <Container93 />
      <Container94 />
    </div>
  );
}

function Container95() {
  return (
    <div className="-translate-y-1/2 absolute h-[20px] left-[4px] overflow-clip top-1/2 w-[100px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[17px] justify-center leading-[0] left-[10px] text-[#f8fafc] text-[14px] text-left top-[9.5px] tracking-[0.25px] w-[100px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre-wrap">All Events</p>
      </div>
    </div>
  );
}

function Svg2() {
  return (
    <div className="-translate-y-1/2 absolute left-[146px] size-[16px] top-1/2" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <rect height="15" stroke="var(--stroke-0, #0F1729)" width="15" x="0.5" y="0.5" />
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function SelectTitle2() {
  return (
    <div className="absolute bg-[#0f1729] border border-[#1d283a] border-solid h-[40px] left-0 right-[0.24px] rounded-[6px] top-0" data-name="select-title">
      <Container95 />
      <Svg2 />
    </div>
  );
}

function Container96() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[calc(50%-81px)] text-[#f8fafc] text-[14px] text-left top-1/2 w-[162px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre-wrap">{`        Hour (3 days)`}</p>
      </div>
    </div>
  );
}

function Container97() {
  return (
    <div className="-translate-y-1/2 absolute font-['Roboto:Regular',sans-serif] font-normal h-[20px] leading-[0] left-[32px] overflow-clip text-[#f8fafc] text-[14px] text-left top-1/2 w-[140px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col h-[17px] justify-center left-0 top-[9.5px] w-[130px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[13.5px] whitespace-pre-wrap">Day (30 days)</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col h-[17px] justify-center left-0 top-[9.5px] w-[130px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[13.5px] whitespace-pre-wrap">Day (30 days)</p>
      </div>
    </div>
  );
}

function MaterialSymbolsCheck2() {
  return (
    <div className="-translate-y-1/2 absolute left-[10px] size-[16px] top-1/2" data-name="material-symbols:check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="material-symbols:check">
          <path d={svgPaths.p6d6f031} fill="var(--fill-0, #F8FAFC)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Combobox2() {
  return (
    <div className="bg-[#3364eb] h-[34px] relative rounded-[6px] shrink-0 w-full" data-name="Combobox">
      <div aria-hidden="true" className="absolute border border-[#1d283a] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <Container97 />
      <MaterialSymbolsCheck2 />
    </div>
  );
}

function Container98() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[calc(50%-81px)] text-[#f8fafc] text-[14px] text-left top-1/2 w-[162px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre-wrap">{`       Week (12 weeks)`}</p>
      </div>
    </div>
  );
}

function Container99() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] left-[calc(50%-81px)] text-[#f8fafc] text-[14px] text-left top-1/2 w-[162px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre-wrap">{`       Month (12 months)`}</p>
      </div>
    </div>
  );
}

function SelectWithOptions2() {
  return (
    <div className="absolute bg-[#0f1729] content-stretch flex flex-col gap-[10px] items-start left-0 p-[3px] right-0 rounded-[6px] top-[57px]" data-name="select-with-options">
      <div aria-hidden="true" className="absolute border border-[#1d283a] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <Container96 />
      <Combobox2 />
      <Container98 />
      <Container99 />
    </div>
  );
}

function Svg3() {
  return (
    <div className="absolute inset-[16.94%_97.53%_70.16%_1.19%]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p2771e980} id="Vector" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-[16.94%_97.53%_70.16%_1.19%]">
      <Svg3 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-[calc(16.94%-0.66px)_calc(93.24%+0.86px)_calc(70.16%+0.4px)_calc(1.19%-0.98px)]">
      <Group1 />
      <div className="absolute flex flex-col font-['Roboto:Medium',sans-serif] font-medium inset-[16.94%_93.24%_70.16%_2.78%] justify-center leading-[0] text-[#94a3b8] text-[14px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre-wrap">{`Filters: `}</p>
      </div>
    </div>
  );
}

function Svg4() {
  return (
    <div className="-translate-y-1/2 absolute left-[16.75px] size-[16px] top-1/2" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d="M5.33333 1.33333V3.99935" id="Vector" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 1.33333V3.99935" id="Vector_2" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3ee34580} id="Vector_3" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 6.66667H14" id="Vector_4" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Svg5() {
  return (
    <div className="-translate-y-1/2 absolute right-[16.74px] size-[16px] top-1/2" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function ButtonDialog() {
  return (
    <div className="backdrop-blur-[12px] bg-[#0f1729] h-[40px] relative rounded-[6px] shrink-0 w-[174.81px]" data-name="Button dialog">
      <div aria-hidden="true" className="absolute border border-[#1d283a] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <Svg4 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] left-[48.73px] not-italic text-[#f8fafc] text-[13.6px] top-[19.99px] w-[85.55px]">
        <p className="leading-[20px] whitespace-pre-wrap">Nov 13, 2025</p>
      </div>
      <Svg5 />
    </div>
  );
}

function Button() {
  return (
    <div className="-translate-y-1/2 absolute h-[36px] left-[15.75px] rounded-[6px] top-[calc(50%-166.32px)] w-[36.71px]" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[16.5px] justify-center leading-[0] left-[calc(50%+0.1px)] not-italic text-[#f8fafc] text-[14px] text-center top-[calc(50%-0.26px)] w-[12.91px]">
        <p className="leading-[20px] whitespace-pre-wrap">←</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="-translate-y-1/2 absolute h-[36px] left-[226.95px] rounded-[6px] top-[calc(50%-166.32px)] w-[36.72px]" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[16.5px] justify-center leading-[0] left-[calc(50%+0.1px)] not-italic text-[#f8fafc] text-[14px] text-center top-[calc(50%-0.26px)] w-[12.92px]">
        <p className="leading-[20px] whitespace-pre-wrap">→</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute left-[231.68px] rounded-[6px] size-[31.99px] top-[107.73px]" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16.5px] justify-center leading-[0] left-[calc(50%+0.1px)] not-italic text-[#94a3b8] text-[14px] text-center top-[calc(50%-0.26px)] w-[6.55px]">
        <p className="leading-[20px] whitespace-pre-wrap">1</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute h-[32px] left-[15.75px] rounded-[6px] top-[143.71px] w-[31.99px]" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16.5px] justify-center leading-[0] left-[calc(50%+0.1px)] not-italic text-[#94a3b8] text-[14px] text-center top-[calc(50%-0.26px)] w-[8.5px]">
        <p className="leading-[20px] whitespace-pre-wrap">2</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute left-[51.73px] rounded-[6px] size-[32px] top-[143.71px]" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16.5px] justify-center leading-[0] left-[calc(50%+0.1px)] not-italic text-[#94a3b8] text-[14px] text-center top-[calc(50%-0.26px)] w-[8.82px]">
        <p className="leading-[20px] whitespace-pre-wrap">3</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute h-[32px] left-[87.72px] rounded-[6px] top-[143.71px] w-[31.99px]" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16.5px] justify-center leading-[0] left-[calc(50%+0.11px)] not-italic text-[#94a3b8] text-[14px] text-center top-[calc(50%-0.26px)] w-[9.06px]">
        <p className="leading-[20px] whitespace-pre-wrap">4</p>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute h-[32px] left-[123.71px] rounded-[6px] top-[143.71px] w-[31.99px]" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16.5px] justify-center leading-[0] left-[calc(50%+0.1px)] not-italic text-[#94a3b8] text-[14px] text-center top-[calc(50%-0.26px)] w-[8.71px]">
        <p className="leading-[20px] whitespace-pre-wrap">5</p>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="absolute h-[32px] left-[159.7px] rounded-[6px] top-[143.71px] w-[31.99px]" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16.5px] justify-center leading-[0] left-[calc(50%+0.1px)] not-italic text-[#94a3b8] text-[14px] text-center top-[calc(50%-0.26px)] w-[8.97px]">
        <p className="leading-[20px] whitespace-pre-wrap">6</p>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="absolute h-[32px] left-[195.69px] rounded-[6px] top-[143.71px] w-[31.99px]" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16.5px] justify-center leading-[0] left-[calc(50%+0.1px)] not-italic text-[#94a3b8] text-[14px] text-center top-[calc(50%-0.26px)] w-[8.03px]">
        <p className="leading-[20px] whitespace-pre-wrap">7</p>
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="absolute h-[32px] left-[231.68px] rounded-[6px] top-[143.71px] w-[31.99px]" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16.5px] justify-center leading-[0] left-[calc(50%+0.1px)] not-italic text-[#94a3b8] text-[14px] text-center top-[calc(50%-0.26px)] w-[8.99px]">
        <p className="leading-[20px] whitespace-pre-wrap">8</p>
      </div>
    </div>
  );
}

function Button10() {
  return (
    <div className="absolute h-[32px] left-[15.75px] rounded-[6px] top-[179.7px] w-[31.99px]" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16.5px] justify-center leading-[0] left-[calc(50%+0.1px)] not-italic text-[#94a3b8] text-[14px] text-center top-[calc(50%-0.26px)] w-[8.97px]">
        <p className="leading-[20px] whitespace-pre-wrap">9</p>
      </div>
    </div>
  );
}

function Button11() {
  return (
    <div className="absolute left-[51.73px] rounded-[6px] size-[32px] top-[179.7px]" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16.5px] justify-center leading-[0] left-[calc(50%+0.09px)] not-italic text-[#94a3b8] text-[13.9px] text-center top-[calc(50%-0.26px)] w-[15.21px]">
        <p className="leading-[20px] whitespace-pre-wrap">10</p>
      </div>
    </div>
  );
}

function Button12() {
  return (
    <div className="absolute h-[32px] left-[87.72px] rounded-[6px] top-[179.7px] w-[31.99px]" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16.5px] justify-center leading-[0] left-[calc(50%+0.1px)] not-italic text-[#94a3b8] text-[13.8px] text-center top-[calc(50%-0.26px)] w-[12.89px]">
        <p className="leading-[20px] whitespace-pre-wrap">11</p>
      </div>
    </div>
  );
}

function Button13() {
  return (
    <div className="absolute h-[32px] left-[123.71px] rounded-[6px] top-[179.7px] w-[31.99px]" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16.5px] justify-center leading-[0] left-[calc(50%+0.1px)] not-italic text-[#94a3b8] text-[13.8px] text-center top-[calc(50%-0.26px)] w-[14.85px]">
        <p className="leading-[20px] whitespace-pre-wrap">12</p>
      </div>
    </div>
  );
}

function Button14() {
  return (
    <div className="absolute bg-[#3364eb] h-[32px] left-[159.7px] rounded-[6px] top-[179.7px] w-[31.99px]" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16.5px] justify-center leading-[0] left-[calc(50%+0.1px)] not-italic text-[#f8fafc] text-[13.7px] text-center top-[calc(50%-0.26px)] w-[15.17px]">
        <p className="leading-[20px] whitespace-pre-wrap">13</p>
      </div>
    </div>
  );
}

function Button15() {
  return (
    <div className="absolute h-[32px] left-[195.69px] rounded-[6px] top-[179.7px] w-[31.99px]" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16.5px] justify-center leading-[0] left-[calc(50%+0.1px)] not-italic text-[#94a3b8] text-[13.9px] text-center top-[calc(50%-0.26px)] w-[15.4px]">
        <p className="leading-[20px] whitespace-pre-wrap">14</p>
      </div>
    </div>
  );
}

function Button16() {
  return (
    <div className="absolute h-[32px] left-[231.68px] rounded-[6px] top-[179.7px] w-[31.99px]" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16.5px] justify-center leading-[0] left-[calc(50%+0.09px)] not-italic text-[#94a3b8] text-[14px] text-center top-[calc(50%-0.26px)] w-[15.05px]">
        <p className="leading-[20px] whitespace-pre-wrap">15</p>
      </div>
    </div>
  );
}

function Button17() {
  return (
    <div className="absolute left-[15.75px] rounded-[6px] size-[31.99px] top-[215.69px]" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16.5px] justify-center leading-[0] left-[calc(50%+0.09px)] not-italic text-[#94a3b8] text-[14px] text-center top-[calc(50%-0.26px)] w-[15.31px]">
        <p className="leading-[20px] whitespace-pre-wrap">16</p>
      </div>
    </div>
  );
}

function Button18() {
  return (
    <div className="absolute h-[31.99px] left-[51.73px] rounded-[6px] top-[215.69px] w-[32px]" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16.5px] justify-center leading-[0] left-[calc(50%+0.09px)] not-italic text-[#94a3b8] text-[13.8px] text-center top-[calc(50%-0.26px)] w-[14.37px]">
        <p className="leading-[20px] whitespace-pre-wrap">17</p>
      </div>
    </div>
  );
}

function Button19() {
  return (
    <div className="absolute left-[87.72px] rounded-[6px] size-[31.99px] top-[215.69px]" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16.5px] justify-center leading-[0] left-[calc(50%+0.11px)] not-italic text-[#94a3b8] text-[14px] text-center top-[calc(50%-0.26px)] w-[15.34px]">
        <p className="leading-[20px] whitespace-pre-wrap">18</p>
      </div>
    </div>
  );
}

function Button20() {
  return (
    <div className="absolute left-[123.71px] rounded-[6px] size-[31.99px] top-[215.69px]" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16.5px] justify-center leading-[0] left-[calc(50%+0.09px)] not-italic text-[#94a3b8] text-[14px] text-center top-[calc(50%-0.26px)] w-[15.3px]">
        <p className="leading-[20px] whitespace-pre-wrap">19</p>
      </div>
    </div>
  );
}

function Button21() {
  return (
    <div className="absolute left-[159.7px] rounded-[6px] size-[31.99px] top-[215.69px]" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16.5px] justify-center leading-[0] left-[calc(50%+0.1px)] not-italic text-[#94a3b8] text-[13.9px] text-center top-[calc(50%-0.26px)] w-[17.17px]">
        <p className="leading-[20px] whitespace-pre-wrap">20</p>
      </div>
    </div>
  );
}

function Button22() {
  return (
    <div className="absolute left-[195.69px] rounded-[6px] size-[31.99px] top-[215.69px]" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16.5px] justify-center leading-[0] left-[calc(50%+0.1px)] not-italic text-[#94a3b8] text-[13.8px] text-center top-[calc(50%-0.26px)] w-[14.85px]">
        <p className="leading-[20px] whitespace-pre-wrap">21</p>
      </div>
    </div>
  );
}

function Button23() {
  return (
    <div className="absolute left-[231.68px] rounded-[6px] size-[31.99px] top-[215.69px]" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16.5px] justify-center leading-[0] left-[calc(50%+0.1px)] not-italic text-[#94a3b8] text-[13.8px] text-center top-[calc(50%-0.26px)] w-[16.79px]">
        <p className="leading-[20px] whitespace-pre-wrap">22</p>
      </div>
    </div>
  );
}

function Button24() {
  return (
    <div className="absolute left-[15.75px] rounded-[6px] size-[31.99px] top-[251.68px]" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16.5px] justify-center leading-[0] left-[calc(50%+0.1px)] not-italic text-[#94a3b8] text-[13.7px] text-center top-[calc(50%-0.26px)] w-[17.12px]">
        <p className="leading-[20px] whitespace-pre-wrap">23</p>
      </div>
    </div>
  );
}

function Button25() {
  return (
    <div className="absolute h-[31.99px] left-[51.73px] rounded-[6px] top-[251.68px] w-[32px]" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16.5px] justify-center leading-[0] left-[calc(50%+0.09px)] not-italic text-[#94a3b8] text-[13.9px] text-center top-[calc(50%-0.26px)] w-[17.15px]">
        <p className="leading-[20px] whitespace-pre-wrap">24</p>
      </div>
    </div>
  );
}

function Button26() {
  return (
    <div className="absolute left-[87.72px] rounded-[6px] size-[31.99px] top-[251.68px]" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16.5px] justify-center leading-[0] left-[calc(50%+0.11px)] not-italic text-[#94a3b8] text-[14px] text-center top-[calc(50%-0.26px)] w-[17px]">
        <p className="leading-[20px] whitespace-pre-wrap">25</p>
      </div>
    </div>
  );
}

function Button27() {
  return (
    <div className="absolute left-[123.71px] rounded-[6px] size-[31.99px] top-[251.68px]" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16.5px] justify-center leading-[0] left-[calc(50%+0.11px)] not-italic text-[#94a3b8] text-[14px] text-center top-[calc(50%-0.26px)] w-[17.26px]">
        <p className="leading-[20px] whitespace-pre-wrap">26</p>
      </div>
    </div>
  );
}

function Button28() {
  return (
    <div className="absolute left-[159.7px] rounded-[6px] size-[31.99px] top-[251.68px]" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16.5px] justify-center leading-[0] left-[calc(50%+0.1px)] not-italic text-[#94a3b8] text-[13.8px] text-center top-[calc(50%-0.26px)] w-[16.33px]">
        <p className="leading-[20px] whitespace-pre-wrap">27</p>
      </div>
    </div>
  );
}

function Button29() {
  return (
    <div className="absolute left-[195.69px] rounded-[6px] size-[31.99px] top-[251.68px]" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16.5px] justify-center leading-[0] left-[calc(50%+0.1px)] not-italic text-[#94a3b8] text-[14px] text-center top-[calc(50%-0.26px)] w-[17.29px]">
        <p className="leading-[20px] whitespace-pre-wrap">28</p>
      </div>
    </div>
  );
}

function Button30() {
  return (
    <div className="absolute left-[231.68px] rounded-[6px] size-[31.99px] top-[251.68px]" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16.5px] justify-center leading-[0] left-[calc(50%+0.1px)] not-italic text-[#94a3b8] text-[14px] text-center top-[calc(50%-0.26px)] w-[17.26px]">
        <p className="leading-[20px] whitespace-pre-wrap">29</p>
      </div>
    </div>
  );
}

function Button31() {
  return (
    <div className="absolute left-[15.75px] rounded-[6px] size-[31.99px] top-[287.67px]" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16.5px] justify-center leading-[0] left-[calc(50%+0.1px)] not-italic text-[#94a3b8] text-[13.8px] text-center top-[calc(50%-0.26px)] w-[17.5px]">
        <p className="leading-[20px] whitespace-pre-wrap">30</p>
      </div>
    </div>
  );
}

function Button32() {
  return (
    <div className="absolute bg-[#0f1729] border border-[#1d283a] border-solid h-[36px] left-0 rounded-[6px] top-[12px] w-[60.08px]" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[13.5px] justify-center leading-[0] left-[calc(50%+0.1px)] not-italic text-[#f8fafc] text-[11.8px] text-center top-[calc(50%-0.51px)] w-[34.78px]">
        <p className="leading-[16px] whitespace-pre-wrap">Today</p>
      </div>
    </div>
  );
}

function Button33() {
  return (
    <div className="absolute bg-[#0f1729] border border-[#1d283a] border-solid h-[36px] left-[68.07px] rounded-[6px] top-[12px] w-[82.79px]" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[13.5px] justify-center leading-[0] left-[calc(50%+0.1px)] not-italic text-[#f8fafc] text-[12px] text-center top-[calc(50%-0.51px)] w-[57.49px]">
        <p className="leading-[16px] whitespace-pre-wrap">Yesterday</p>
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="absolute border-[#0f1729] border-solid border-t-[0.75px] h-[48.75px] left-[15.75px] top-[335.66px] w-[247.92px]" data-name="HorizontalBorder">
      <Button32 />
      <Button33 />
    </div>
  );
}

function BackgroundBorderShadow() {
  return (
    <div className="absolute bg-[#0f1729] border border-[#0f1729] border-solid h-[402.15px] left-[-0.25px] overflow-clip rounded-[8px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[-0.25px] w-[281.41px]" data-name="Background+Border+Shadow">
      <Button />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[18.75px] justify-center leading-[0] left-[78.65px] not-italic text-[#f1f5f9] text-[15.6px] top-[33.38px] w-[122.31px]">
        <p className="leading-[24px] whitespace-pre-wrap">November 2025</p>
      </div>
      <Button1 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[13.5px] justify-center leading-[0] left-[calc(50%-107.87px)] not-italic text-[#94a3b8] text-[12px] text-center top-[calc(50%-116.84px)] w-[15.18px]">
        <p className="leading-[16px] whitespace-pre-wrap">Su</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[13.5px] justify-center leading-[0] left-[calc(50%-71.88px)] not-italic text-[#94a3b8] text-[12px] text-center top-[calc(50%-116.84px)] w-[18.03px]">
        <p className="leading-[16px] whitespace-pre-wrap">Mo</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[13.5px] justify-center leading-[0] left-[calc(50%-35.89px)] not-italic text-[#94a3b8] text-[12px] text-center top-[calc(50%-116.84px)] w-[14.31px]">
        <p className="leading-[16px] whitespace-pre-wrap">Tu</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[13.5px] justify-center leading-[0] left-[calc(50%+0.1px)] not-italic text-[#94a3b8] text-[12px] text-center top-[calc(50%-116.84px)] w-[18.33px]">
        <p className="leading-[16px] whitespace-pre-wrap">We</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[13.5px] justify-center leading-[0] left-[calc(50%+36.09px)] not-italic text-[#94a3b8] text-[12px] text-center top-[calc(50%-116.84px)] w-[15.15px]">
        <p className="leading-[16px] whitespace-pre-wrap">Th</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[13.5px] justify-center leading-[0] left-[calc(50%+72.07px)] not-italic text-[#94a3b8] text-[12px] text-center top-[calc(50%-116.84px)] w-[11.95px]">
        <p className="leading-[16px] whitespace-pre-wrap">Fr</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[13.5px] justify-center leading-[0] left-[calc(50%+108.06px)] not-italic text-[#94a3b8] text-[12px] text-center top-[calc(50%-116.84px)] w-[14.75px]">
        <p className="leading-[16px] whitespace-pre-wrap">Sa</p>
      </div>
      <Button2 />
      <Button3 />
      <Button4 />
      <Button5 />
      <Button6 />
      <Button7 />
      <Button8 />
      <Button9 />
      <Button10 />
      <Button11 />
      <Button12 />
      <Button13 />
      <Button14 />
      <Button15 />
      <Button16 />
      <Button17 />
      <Button18 />
      <Button19 />
      <Button20 />
      <Button21 />
      <Button22 />
      <Button23 />
      <Button24 />
      <Button25 />
      <Button26 />
      <Button27 />
      <Button28 />
      <Button29 />
      <Button30 />
      <Button31 />
      <HorizontalBorder />
    </div>
  );
}

function Dialog() {
  return (
    <div className="absolute bg-[#0f1729] border border-[#1d283a] border-solid h-[403.65px] left-0 overflow-clip rounded-[6px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] top-0 w-[282.91px]" data-name="Dialog">
      <BackgroundBorderShadow />
    </div>
  );
}

function Calendar() {
  return (
    <div className="h-[403.65px] relative shrink-0 w-full" data-name="calendar">
      <Dialog />
    </div>
  );
}

function Svg6() {
  return (
    <div className="-translate-y-1/2 absolute left-[16.75px] size-[16px] top-1/2" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d="M5.33333 1.33333V3.99935" id="Vector" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 1.33333V3.99935" id="Vector_2" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3ee34580} id="Vector_3" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 6.66667H14" id="Vector_4" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Svg7() {
  return (
    <div className="-translate-y-1/2 absolute right-[16.74px] size-[16px] top-1/2" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function ButtonDialog1() {
  return (
    <div className="backdrop-blur-[12px] bg-[#0f1729] h-[40px] relative rounded-[6px] shrink-0 w-[174.81px]" data-name="Button dialog">
      <div aria-hidden="true" className="absolute border border-[#1d283a] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <Svg6 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] left-[48.73px] not-italic text-[#f8fafc] text-[13.6px] top-[19.99px] w-[85.55px]">
        <p className="leading-[20px] whitespace-pre-wrap">Nov 13, 2025</p>
      </div>
      <Svg7 />
    </div>
  );
}

function Button34() {
  return (
    <div className="-translate-y-1/2 absolute h-[36px] left-[15.75px] rounded-[6px] top-[calc(50%-166.32px)] w-[36.71px]" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[16.5px] justify-center leading-[0] left-[calc(50%+0.1px)] not-italic text-[#f8fafc] text-[14px] text-center top-[calc(50%-0.26px)] w-[12.91px]">
        <p className="leading-[20px] whitespace-pre-wrap">←</p>
      </div>
    </div>
  );
}

function Button35() {
  return (
    <div className="-translate-y-1/2 absolute h-[36px] left-[226.95px] rounded-[6px] top-[calc(50%-166.32px)] w-[36.72px]" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[16.5px] justify-center leading-[0] left-[calc(50%+0.1px)] not-italic text-[#f8fafc] text-[14px] text-center top-[calc(50%-0.26px)] w-[12.92px]">
        <p className="leading-[20px] whitespace-pre-wrap">→</p>
      </div>
    </div>
  );
}

function Button36() {
  return (
    <div className="absolute left-[231.68px] rounded-[6px] size-[31.99px] top-[107.73px]" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16.5px] justify-center leading-[0] left-[calc(50%+0.1px)] not-italic text-[#94a3b8] text-[14px] text-center top-[calc(50%-0.26px)] w-[6.55px]">
        <p className="leading-[20px] whitespace-pre-wrap">1</p>
      </div>
    </div>
  );
}

function Button37() {
  return (
    <div className="absolute h-[32px] left-[15.75px] rounded-[6px] top-[143.71px] w-[31.99px]" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16.5px] justify-center leading-[0] left-[calc(50%+0.1px)] not-italic text-[#94a3b8] text-[14px] text-center top-[calc(50%-0.26px)] w-[8.5px]">
        <p className="leading-[20px] whitespace-pre-wrap">2</p>
      </div>
    </div>
  );
}

function Button38() {
  return (
    <div className="absolute left-[51.73px] rounded-[6px] size-[32px] top-[143.71px]" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16.5px] justify-center leading-[0] left-[calc(50%+0.1px)] not-italic text-[#94a3b8] text-[14px] text-center top-[calc(50%-0.26px)] w-[8.82px]">
        <p className="leading-[20px] whitespace-pre-wrap">3</p>
      </div>
    </div>
  );
}

function Button39() {
  return (
    <div className="absolute h-[32px] left-[87.72px] rounded-[6px] top-[143.71px] w-[31.99px]" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16.5px] justify-center leading-[0] left-[calc(50%+0.11px)] not-italic text-[#94a3b8] text-[14px] text-center top-[calc(50%-0.26px)] w-[9.06px]">
        <p className="leading-[20px] whitespace-pre-wrap">4</p>
      </div>
    </div>
  );
}

function Button40() {
  return (
    <div className="absolute h-[32px] left-[123.71px] rounded-[6px] top-[143.71px] w-[31.99px]" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16.5px] justify-center leading-[0] left-[calc(50%+0.1px)] not-italic text-[#94a3b8] text-[14px] text-center top-[calc(50%-0.26px)] w-[8.71px]">
        <p className="leading-[20px] whitespace-pre-wrap">5</p>
      </div>
    </div>
  );
}

function Button41() {
  return (
    <div className="absolute h-[32px] left-[159.7px] rounded-[6px] top-[143.71px] w-[31.99px]" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16.5px] justify-center leading-[0] left-[calc(50%+0.1px)] not-italic text-[#94a3b8] text-[14px] text-center top-[calc(50%-0.26px)] w-[8.97px]">
        <p className="leading-[20px] whitespace-pre-wrap">6</p>
      </div>
    </div>
  );
}

function Button42() {
  return (
    <div className="absolute h-[32px] left-[195.69px] rounded-[6px] top-[143.71px] w-[31.99px]" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16.5px] justify-center leading-[0] left-[calc(50%+0.1px)] not-italic text-[#94a3b8] text-[14px] text-center top-[calc(50%-0.26px)] w-[8.03px]">
        <p className="leading-[20px] whitespace-pre-wrap">7</p>
      </div>
    </div>
  );
}

function Button43() {
  return (
    <div className="absolute h-[32px] left-[231.68px] rounded-[6px] top-[143.71px] w-[31.99px]" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16.5px] justify-center leading-[0] left-[calc(50%+0.1px)] not-italic text-[#94a3b8] text-[14px] text-center top-[calc(50%-0.26px)] w-[8.99px]">
        <p className="leading-[20px] whitespace-pre-wrap">8</p>
      </div>
    </div>
  );
}

function Button44() {
  return (
    <div className="absolute h-[32px] left-[15.75px] rounded-[6px] top-[179.7px] w-[31.99px]" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16.5px] justify-center leading-[0] left-[calc(50%+0.1px)] not-italic text-[#94a3b8] text-[14px] text-center top-[calc(50%-0.26px)] w-[8.97px]">
        <p className="leading-[20px] whitespace-pre-wrap">9</p>
      </div>
    </div>
  );
}

function Button45() {
  return (
    <div className="absolute left-[51.73px] rounded-[6px] size-[32px] top-[179.7px]" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16.5px] justify-center leading-[0] left-[calc(50%+0.09px)] not-italic text-[#94a3b8] text-[13.9px] text-center top-[calc(50%-0.26px)] w-[15.21px]">
        <p className="leading-[20px] whitespace-pre-wrap">10</p>
      </div>
    </div>
  );
}

function Button46() {
  return (
    <div className="absolute h-[32px] left-[87.72px] rounded-[6px] top-[179.7px] w-[31.99px]" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16.5px] justify-center leading-[0] left-[calc(50%+0.1px)] not-italic text-[#94a3b8] text-[13.8px] text-center top-[calc(50%-0.26px)] w-[12.89px]">
        <p className="leading-[20px] whitespace-pre-wrap">11</p>
      </div>
    </div>
  );
}

function Button47() {
  return (
    <div className="absolute h-[32px] left-[123.71px] rounded-[6px] top-[179.7px] w-[31.99px]" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16.5px] justify-center leading-[0] left-[calc(50%+0.1px)] not-italic text-[#94a3b8] text-[13.8px] text-center top-[calc(50%-0.26px)] w-[14.85px]">
        <p className="leading-[20px] whitespace-pre-wrap">12</p>
      </div>
    </div>
  );
}

function Button48() {
  return (
    <div className="absolute bg-[#3364eb] h-[32px] left-[159.7px] rounded-[6px] top-[179.7px] w-[31.99px]" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16.5px] justify-center leading-[0] left-[calc(50%+0.1px)] not-italic text-[#f8fafc] text-[13.7px] text-center top-[calc(50%-0.26px)] w-[15.17px]">
        <p className="leading-[20px] whitespace-pre-wrap">13</p>
      </div>
    </div>
  );
}

function Button49() {
  return (
    <div className="absolute h-[32px] left-[195.69px] rounded-[6px] top-[179.7px] w-[31.99px]" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16.5px] justify-center leading-[0] left-[calc(50%+0.1px)] not-italic text-[#94a3b8] text-[13.9px] text-center top-[calc(50%-0.26px)] w-[15.4px]">
        <p className="leading-[20px] whitespace-pre-wrap">14</p>
      </div>
    </div>
  );
}

function Button50() {
  return (
    <div className="absolute h-[32px] left-[231.68px] rounded-[6px] top-[179.7px] w-[31.99px]" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16.5px] justify-center leading-[0] left-[calc(50%+0.09px)] not-italic text-[#94a3b8] text-[14px] text-center top-[calc(50%-0.26px)] w-[15.05px]">
        <p className="leading-[20px] whitespace-pre-wrap">15</p>
      </div>
    </div>
  );
}

function Button51() {
  return (
    <div className="absolute left-[15.75px] rounded-[6px] size-[31.99px] top-[215.69px]" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16.5px] justify-center leading-[0] left-[calc(50%+0.09px)] not-italic text-[#94a3b8] text-[14px] text-center top-[calc(50%-0.26px)] w-[15.31px]">
        <p className="leading-[20px] whitespace-pre-wrap">16</p>
      </div>
    </div>
  );
}

function Button52() {
  return (
    <div className="absolute h-[31.99px] left-[51.73px] rounded-[6px] top-[215.69px] w-[32px]" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16.5px] justify-center leading-[0] left-[calc(50%+0.09px)] not-italic text-[#94a3b8] text-[13.8px] text-center top-[calc(50%-0.26px)] w-[14.37px]">
        <p className="leading-[20px] whitespace-pre-wrap">17</p>
      </div>
    </div>
  );
}

function Button53() {
  return (
    <div className="absolute left-[87.72px] rounded-[6px] size-[31.99px] top-[215.69px]" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16.5px] justify-center leading-[0] left-[calc(50%+0.11px)] not-italic text-[#94a3b8] text-[14px] text-center top-[calc(50%-0.26px)] w-[15.34px]">
        <p className="leading-[20px] whitespace-pre-wrap">18</p>
      </div>
    </div>
  );
}

function Button54() {
  return (
    <div className="absolute left-[123.71px] rounded-[6px] size-[31.99px] top-[215.69px]" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16.5px] justify-center leading-[0] left-[calc(50%+0.09px)] not-italic text-[#94a3b8] text-[14px] text-center top-[calc(50%-0.26px)] w-[15.3px]">
        <p className="leading-[20px] whitespace-pre-wrap">19</p>
      </div>
    </div>
  );
}

function Button55() {
  return (
    <div className="absolute left-[159.7px] rounded-[6px] size-[31.99px] top-[215.69px]" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16.5px] justify-center leading-[0] left-[calc(50%+0.1px)] not-italic text-[#94a3b8] text-[13.9px] text-center top-[calc(50%-0.26px)] w-[17.17px]">
        <p className="leading-[20px] whitespace-pre-wrap">20</p>
      </div>
    </div>
  );
}

function Button56() {
  return (
    <div className="absolute left-[195.69px] rounded-[6px] size-[31.99px] top-[215.69px]" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16.5px] justify-center leading-[0] left-[calc(50%+0.1px)] not-italic text-[#94a3b8] text-[13.8px] text-center top-[calc(50%-0.26px)] w-[14.85px]">
        <p className="leading-[20px] whitespace-pre-wrap">21</p>
      </div>
    </div>
  );
}

function Button57() {
  return (
    <div className="absolute left-[231.68px] rounded-[6px] size-[31.99px] top-[215.69px]" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16.5px] justify-center leading-[0] left-[calc(50%+0.1px)] not-italic text-[#94a3b8] text-[13.8px] text-center top-[calc(50%-0.26px)] w-[16.79px]">
        <p className="leading-[20px] whitespace-pre-wrap">22</p>
      </div>
    </div>
  );
}

function Button58() {
  return (
    <div className="absolute left-[15.75px] rounded-[6px] size-[31.99px] top-[251.68px]" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16.5px] justify-center leading-[0] left-[calc(50%+0.1px)] not-italic text-[#94a3b8] text-[13.7px] text-center top-[calc(50%-0.26px)] w-[17.12px]">
        <p className="leading-[20px] whitespace-pre-wrap">23</p>
      </div>
    </div>
  );
}

function Button59() {
  return (
    <div className="absolute h-[31.99px] left-[51.73px] rounded-[6px] top-[251.68px] w-[32px]" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16.5px] justify-center leading-[0] left-[calc(50%+0.09px)] not-italic text-[#94a3b8] text-[13.9px] text-center top-[calc(50%-0.26px)] w-[17.15px]">
        <p className="leading-[20px] whitespace-pre-wrap">24</p>
      </div>
    </div>
  );
}

function Button60() {
  return (
    <div className="absolute left-[87.72px] rounded-[6px] size-[31.99px] top-[251.68px]" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16.5px] justify-center leading-[0] left-[calc(50%+0.11px)] not-italic text-[#94a3b8] text-[14px] text-center top-[calc(50%-0.26px)] w-[17px]">
        <p className="leading-[20px] whitespace-pre-wrap">25</p>
      </div>
    </div>
  );
}

function Button61() {
  return (
    <div className="absolute left-[123.71px] rounded-[6px] size-[31.99px] top-[251.68px]" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16.5px] justify-center leading-[0] left-[calc(50%+0.11px)] not-italic text-[#94a3b8] text-[14px] text-center top-[calc(50%-0.26px)] w-[17.26px]">
        <p className="leading-[20px] whitespace-pre-wrap">26</p>
      </div>
    </div>
  );
}

function Button62() {
  return (
    <div className="absolute left-[159.7px] rounded-[6px] size-[31.99px] top-[251.68px]" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16.5px] justify-center leading-[0] left-[calc(50%+0.1px)] not-italic text-[#94a3b8] text-[13.8px] text-center top-[calc(50%-0.26px)] w-[16.33px]">
        <p className="leading-[20px] whitespace-pre-wrap">27</p>
      </div>
    </div>
  );
}

function Button63() {
  return (
    <div className="absolute left-[195.69px] rounded-[6px] size-[31.99px] top-[251.68px]" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16.5px] justify-center leading-[0] left-[calc(50%+0.1px)] not-italic text-[#94a3b8] text-[14px] text-center top-[calc(50%-0.26px)] w-[17.29px]">
        <p className="leading-[20px] whitespace-pre-wrap">28</p>
      </div>
    </div>
  );
}

function Button64() {
  return (
    <div className="absolute left-[231.68px] rounded-[6px] size-[31.99px] top-[251.68px]" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16.5px] justify-center leading-[0] left-[calc(50%+0.1px)] not-italic text-[#94a3b8] text-[14px] text-center top-[calc(50%-0.26px)] w-[17.26px]">
        <p className="leading-[20px] whitespace-pre-wrap">29</p>
      </div>
    </div>
  );
}

function Button65() {
  return (
    <div className="absolute left-[15.75px] rounded-[6px] size-[31.99px] top-[287.67px]" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16.5px] justify-center leading-[0] left-[calc(50%+0.1px)] not-italic text-[#94a3b8] text-[13.8px] text-center top-[calc(50%-0.26px)] w-[17.5px]">
        <p className="leading-[20px] whitespace-pre-wrap">30</p>
      </div>
    </div>
  );
}

function Button66() {
  return (
    <div className="absolute bg-[#0f1729] border border-[#1d283a] border-solid h-[36px] left-0 rounded-[6px] top-[12px] w-[60.08px]" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[13.5px] justify-center leading-[0] left-[calc(50%+0.1px)] not-italic text-[#f8fafc] text-[11.8px] text-center top-[calc(50%-0.51px)] w-[34.78px]">
        <p className="leading-[16px] whitespace-pre-wrap">Today</p>
      </div>
    </div>
  );
}

function Button67() {
  return (
    <div className="absolute bg-[#0f1729] border border-[#1d283a] border-solid h-[36px] left-[68.07px] rounded-[6px] top-[12px] w-[82.79px]" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[13.5px] justify-center leading-[0] left-[calc(50%+0.1px)] not-italic text-[#f8fafc] text-[12px] text-center top-[calc(50%-0.51px)] w-[57.49px]">
        <p className="leading-[16px] whitespace-pre-wrap">Yesterday</p>
      </div>
    </div>
  );
}

function HorizontalBorder1() {
  return (
    <div className="absolute border-[#0f1729] border-solid border-t-[0.75px] h-[48.75px] left-[15.75px] top-[335.66px] w-[247.92px]" data-name="HorizontalBorder">
      <Button66 />
      <Button67 />
    </div>
  );
}

function BackgroundBorderShadow1() {
  return (
    <div className="absolute bg-[#0f1729] border border-[#0f1729] border-solid h-[402.15px] left-[-0.25px] overflow-clip rounded-[8px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[-0.25px] w-[281.41px]" data-name="Background+Border+Shadow">
      <Button34 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[18.75px] justify-center leading-[0] left-[78.65px] not-italic text-[#f1f5f9] text-[15.6px] top-[33.38px] w-[122.31px]">
        <p className="leading-[24px] whitespace-pre-wrap">November 2025</p>
      </div>
      <Button35 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[13.5px] justify-center leading-[0] left-[calc(50%-107.87px)] not-italic text-[#94a3b8] text-[12px] text-center top-[calc(50%-116.84px)] w-[15.18px]">
        <p className="leading-[16px] whitespace-pre-wrap">Su</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[13.5px] justify-center leading-[0] left-[calc(50%-71.88px)] not-italic text-[#94a3b8] text-[12px] text-center top-[calc(50%-116.84px)] w-[18.03px]">
        <p className="leading-[16px] whitespace-pre-wrap">Mo</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[13.5px] justify-center leading-[0] left-[calc(50%-35.89px)] not-italic text-[#94a3b8] text-[12px] text-center top-[calc(50%-116.84px)] w-[14.31px]">
        <p className="leading-[16px] whitespace-pre-wrap">Tu</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[13.5px] justify-center leading-[0] left-[calc(50%+0.1px)] not-italic text-[#94a3b8] text-[12px] text-center top-[calc(50%-116.84px)] w-[18.33px]">
        <p className="leading-[16px] whitespace-pre-wrap">We</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[13.5px] justify-center leading-[0] left-[calc(50%+36.09px)] not-italic text-[#94a3b8] text-[12px] text-center top-[calc(50%-116.84px)] w-[15.15px]">
        <p className="leading-[16px] whitespace-pre-wrap">Th</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[13.5px] justify-center leading-[0] left-[calc(50%+72.07px)] not-italic text-[#94a3b8] text-[12px] text-center top-[calc(50%-116.84px)] w-[11.95px]">
        <p className="leading-[16px] whitespace-pre-wrap">Fr</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[13.5px] justify-center leading-[0] left-[calc(50%+108.06px)] not-italic text-[#94a3b8] text-[12px] text-center top-[calc(50%-116.84px)] w-[14.75px]">
        <p className="leading-[16px] whitespace-pre-wrap">Sa</p>
      </div>
      <Button36 />
      <Button37 />
      <Button38 />
      <Button39 />
      <Button40 />
      <Button41 />
      <Button42 />
      <Button43 />
      <Button44 />
      <Button45 />
      <Button46 />
      <Button47 />
      <Button48 />
      <Button49 />
      <Button50 />
      <Button51 />
      <Button52 />
      <Button53 />
      <Button54 />
      <Button55 />
      <Button56 />
      <Button57 />
      <Button58 />
      <Button59 />
      <Button60 />
      <Button61 />
      <Button62 />
      <Button63 />
      <Button64 />
      <Button65 />
      <HorizontalBorder1 />
    </div>
  );
}

function Dialog1() {
  return (
    <div className="absolute bg-[#0f1729] border border-[#1d283a] border-solid h-[403.65px] left-0 overflow-clip rounded-[6px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] top-0 w-[282.91px]" data-name="Dialog">
      <BackgroundBorderShadow1 />
    </div>
  );
}

function Calendar1() {
  return (
    <div className="h-[403.65px] relative shrink-0 w-full" data-name="calendar">
      <Dialog1 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[667px] top-[67px]">
      <div className="-translate-y-1/2 absolute content-stretch flex flex-col gap-[21px] h-[40px] items-start left-[668px] overflow-clip top-[calc(50%+26px)] w-[177px]" data-name="date-picker">
        <ButtonDialog />
        <Calendar />
      </div>
      <div className="-translate-y-1/2 absolute content-stretch flex flex-col gap-[21px] h-[40px] items-start left-[861px] overflow-clip top-[calc(50%+27px)] w-[177px]" data-name="date-picker">
        <ButtonDialog1 />
        <Calendar1 />
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] left-[849px] text-[#94a3b8] text-[12px] top-[85px] tracking-[0.25px] w-[13px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre-wrap">_</p>
      </div>
    </div>
  );
}

function InputContainer() {
  return (
    <div className="h-[40px] min-w-[10px] relative rounded-[6px] shrink-0 w-full" data-name="input-container">
      <div aria-hidden="true" className="absolute border border-[#1d283a] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-row items-center min-w-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-center min-w-[inherit] px-[12px] py-[8px] relative size-full">
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Search-Icon">
            <div className="absolute inset-[12.5%]" data-name="Icon">
              <div className="absolute inset-[-6.67%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.6 13.6">
                  <path d={svgPaths.p8625680} id="Icon" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
                </svg>
              </div>
            </div>
          </div>
          <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[14px] tracking-[0.25px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[20px]">Search events...</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Svg8() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-23.25px)] size-[16px] top-1/2" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p12949080} id="Vector" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 2V5.33252H5.33252" id="Vector_2" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button68() {
  return (
    <div className="-translate-y-1/2 absolute backdrop-blur-[2px] bg-[#0f1729] border border-[#1d283a] border-solid h-[40px] left-[1152px] rounded-[6px] top-[calc(50%-28px)] w-[88px]" data-name="Button">
      <Svg8 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Roboto:Medium',sans-serif] font-medium h-[14px] justify-center leading-[0] left-[calc(50%+13.3px)] text-[#f8fafc] text-[12px] text-center top-[calc(50%-0.74px)] w-[45px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px] whitespace-pre-wrap">Refresh</p>
      </div>
    </div>
  );
}

function FiltersBoxAtChildSafety({ className }: { className?: string }) {
  return (
    <div className={className || "absolute backdrop-blur-[12px] bg-[#0f1729] border border-[#1d283a] border-solid inset-0 rounded-[16px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)]"} data-name="filters-box-at-child-safety">
      <button className="absolute block cursor-pointer h-[40px] left-[97px] overflow-clip top-[66px] w-[180px]" data-name="Select-alert-type-at-child-safety">
        <SelectTitle />
        <SelectWithOptions />
      </button>
      <button className="absolute block cursor-pointer h-[40px] left-[287px] overflow-clip top-[66px] w-[180px]" data-name="Select-zone-at-child-safety">
        <SelectTitle1 />
        <SelectWithOptions1 />
      </button>
      <button className="absolute block cursor-pointer h-[40px] left-[477px] overflow-clip top-[66px] w-[180px]" data-name="Select-time-period-at-suspicious-events">
        <SelectTitle2 />
        <SelectWithOptions2 />
      </button>
      <Group2 />
      <Group />
      <div className="absolute content-stretch flex flex-col gap-[10px] items-start left-[97px] right-[130px] top-[13px]" data-name="Input">
        <InputContainer />
      </div>
      <Button68 />
    </div>
  );
}

function HSPpeDateSelectorBar() {
  return (
    <div className="absolute inset-[0_0_1084px_0]" data-name="h&s_ppe_date_selector_bar">
      <FiltersBoxAtChildSafety />
    </div>
  );
}

function Tabpanel1() {
  return (
    <div className="absolute h-[1208px] left-0 overflow-clip right-0 top-[450px]" data-name="Tabpanel">
      <Group3 />
      <HSPpeDateSelectorBar />
    </div>
  );
}

function Svg9() {
  return (
    <div className="absolute left-[15.99px] size-[31.99px] top-[16px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31.99 31.99">
        <g id="SVG">
          <path d={svgPaths.p15e33100} id="Vector" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66583" />
          <path d="M15.995 10.6633V15.9954" id="Vector_2" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66583" />
          <path d="M15.995 21.3267H16.0083" id="Vector_3" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66583" />
        </g>
      </svg>
    </div>
  );
}

function Background1() {
  return (
    <div className="absolute bg-[#ef4343] left-[32.74px] rounded-[16px] size-[63.98px] top-[28.75px]" data-name="Background">
      <Svg9 />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents left-[31.74px] top-[26px]">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Bold',sans-serif] font-bold h-[40px] justify-center leading-[0] left-[113px] text-[#e1e7ef] text-[36px] top-[47px] tracking-[-0.9px] w-[702px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[40px] whitespace-pre-wrap">Child Safety Monitoring System</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[21px] justify-center leading-[0] left-[113px] text-[#94a3b8] text-[16px] top-[80.5px] tracking-[0.25px] w-[724px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre-wrap">Real-time protection and event management</p>
      </div>
      <Background1 />
    </div>
  );
}

function Svg10() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-29.34px)] size-[16px] top-[calc(50%-0.24px)]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p19987d80} id="Vector" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M13.9992 2V5.33252H10.6667" id="Vector_2" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2a3e9c80} id="Vector_3" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M5.33252 10.6667H2V13.9992" id="Vector_4" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button69() {
  return (
    <div className="absolute bg-[#0f1729] border border-[#1d283a] border-solid inset-[36.74%_1.22%_36.19%_90.97%] rounded-[6px]" data-name="Button">
      <Svg10 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Roboto:Medium',sans-serif] font-medium h-[16.5px] justify-center leading-[0] left-[calc(50%+12.23px)] text-[#f8fafc] text-[14px] text-center top-[calc(50%-0.49px)] w-[51.16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre-wrap">Refresh</p>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents inset-[calc(36.37%-0.27px)_calc(1.22%-0.98px)_calc(36.19%-0.28px)_calc(83.45%+0.67px)]">
      <div className="absolute flex flex-col font-['Roboto:Medium',sans-serif] font-medium inset-[36.37%_9.95%_36.19%_83.45%] justify-center leading-[20px] text-[#94a3b8] text-[0px] text-[14px] text-right whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="mb-0" style={{ fontVariationSettings: "'wdth' 100" }}>
          Last updated
        </p>
        <p className="text-[#f8fafc]" style={{ fontVariationSettings: "'wdth' 100" }}>
          02:15 PM
        </p>
      </div>
      <Button69 />
    </div>
  );
}

function HeaderAtChildMonitoring() {
  return (
    <div className="absolute backdrop-blur-[12px] bg-[#0f1729] border border-[#1d283a] border-solid inset-[3.46%_0_65.37%_0] overflow-clip rounded-[24px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" data-name="header-at-child-monitoring">
      <div className="absolute blur-[8px] inset-[33.75px_1135.28px_33.27px_31.74px] opacity-30 rounded-[16px]" data-name="Gradient+Blur" />
      <Group5 />
      <Group4 />
    </div>
  );
}

function Icon30() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-0.44px)] size-[16px] top-1/2" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p39608d00} id="Vector" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99942" />
          <path d={svgPaths.p17134c00} id="Vector_2" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99942" />
        </g>
      </svg>
    </div>
  );
}

function Background2() {
  return (
    <div className="-translate-y-1/2 absolute bg-[#ef4343] left-[233px] rounded-[99999px] size-[32px] top-[calc(50%-34px)]" data-name="Background">
      <Icon30 />
    </div>
  );
}

function OverlayBorderShadowOverlayBlur() {
  return (
    <div className="absolute backdrop-blur-[12px] bg-[#0f1729] border border-[#1d283a] border-solid inset-[0_51.14%_0_25.34%] overflow-clip rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" data-name="Overlay+Border+Shadow+OverlayBlur">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] left-[23.56px] text-[#f8fafc] text-[14px] top-[39px] w-[147px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre-wrap">Confirmed Events</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Bold',sans-serif] font-bold h-[36px] justify-center leading-[0] left-[24px] text-[#ef4343] text-[36px] top-[79px] tracking-[-0.9px] w-[69px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[40px] whitespace-pre-wrap">107</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[13px] justify-center leading-[0] left-[23.5px] text-[#94a3b8] text-[14px] top-[115.66px] tracking-[0.25px] w-[225px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre-wrap">Legitimate safety concern</p>
      </div>
      <Background2 />
    </div>
  );
}

function Svg11() {
  return (
    <div className="absolute left-[7.99px] size-[16px] top-[8px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p37f49070} id="Vector" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 5.33333V7.99935" id="Vector_2" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 10.6667H8.00667" id="Vector_3" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Background3() {
  return (
    <div className="-translate-y-1/2 absolute bg-[#ef4343] left-[233px] rounded-[99999px] size-[32px] top-[calc(50%-34px)]" data-name="Background">
      <Svg11 />
    </div>
  );
}

function OverlayBorderShadowOverlayBlur1() {
  return (
    <div className="absolute backdrop-blur-[12px] bg-[#0f1729] border border-[#1d283a] border-solid inset-[0_76.56%_0_0] overflow-clip rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" data-name="Overlay+Border+Shadow+OverlayBlur">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] left-[24px] text-[#f8fafc] text-[14px] top-[39.16px] w-[165px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre-wrap">Total Events</p>
      </div>
      <Background3 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Bold',sans-serif] font-bold h-[36px] justify-center leading-[0] left-[24px] text-[#ef4343] text-[36px] top-[79.16px] tracking-[-0.9px] w-[69px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[40px] whitespace-pre-wrap">231</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[13.5px] justify-center leading-[0] left-[24px] text-[#94a3b8] text-[12px] top-[115.91px] tracking-[0.25px] w-[117.15px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre-wrap">All events</p>
      </div>
    </div>
  );
}

function Icon31() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[16px] top-1/2" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_3644)" id="Icon">
          <path d={svgPaths.p39ee6532} id="Vector" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p17134c00} id="Vector_2" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_1_3644">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Background4() {
  return (
    <div className="-translate-y-1/2 absolute bg-[#21c45d] left-[240.6px] rounded-[99999px] size-[32px] top-[calc(50%-34px)]" data-name="Background">
      <Icon31 />
    </div>
  );
}

function OverlayBorderShadowOverlayBlur2() {
  return (
    <div className="absolute backdrop-blur-[12px] bg-[#0f1729] border border-[#1d283a] border-solid inset-[0_25.75%_0_50.8%] overflow-clip rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" data-name="Overlay+Border+Shadow+OverlayBlur">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] left-[23.5px] text-[#f8fafc] text-[14px] top-[40.16px] w-[110px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre-wrap">Resolved-Benign</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Bold',sans-serif] font-bold h-[35px] justify-center leading-[0] left-[23.75px] text-[#21c45d] text-[36px] top-[78.5px] tracking-[-0.9px] w-[97px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[40px] whitespace-pre-wrap">83</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] left-[23.5px] not-italic text-[#94a3b8] text-[12px] top-[117.16px] w-[206px]">
        <p className="leading-[16px] whitespace-pre-wrap">Situation was safe</p>
      </div>
      <Background4 />
    </div>
  );
}

function Icon32() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+0.14px)] size-[16px] top-[calc(50%+0.26px)]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_3635)" id="Icon">
          <path d={svgPaths.p39ee6532} id="Vector" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99942" />
          <path d="M10 6L6 10" id="Vector_2" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99942" />
          <path d="M6 6L10 10" id="Vector_3" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99942" />
        </g>
        <defs>
          <clipPath id="clip0_1_3635">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Background5() {
  return (
    <div className="-translate-y-1/2 absolute bg-[#1d283a] left-[232.53px] rounded-[12px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] size-[31.98px] top-[calc(50%-36.26px)]" data-name="Background">
      <Icon32 />
    </div>
  );
}

function OverlayBorderShadowOverlayBlur3() {
  return (
    <div className="absolute backdrop-blur-[12px] bg-[#0f1729] border border-[#1d283a] border-solid inset-[0_0_0_76.56%] overflow-clip rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" data-name="Overlay+Border+Shadow+OverlayBlur">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] left-[23.66px] text-[#f8fafc] text-[14px] top-[40px] w-[146px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre-wrap">False Positive</p>
      </div>
      <Background5 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[36px] justify-center leading-[0] left-[23.5px] not-italic text-[#f8fafc] text-[30px] top-[86.16px] w-[35px]">
        <p className="leading-[36px] whitespace-pre-wrap">41</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] left-[23.66px] text-[#94a3b8] text-[14px] top-[120px] tracking-[0.25px] w-[196px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre-wrap">Detection error</p>
      </div>
    </div>
  );
}

function KpIsChildSafety() {
  return (
    <div className="absolute inset-[61.04%_0.03%_0_0]" data-name="KPIs-child-safety">
      <OverlayBorderShadowOverlayBlur />
      <OverlayBorderShadowOverlayBlur1 />
      <OverlayBorderShadowOverlayBlur2 />
      <OverlayBorderShadowOverlayBlur3 />
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents inset-[61.04%_0.03%_0_0]">
      <KpIsChildSafety />
    </div>
  );
}

function Svg12() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p2d09d900} id="Vector" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Frame11() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex gap-[8px] items-center left-[calc(50%-0.18px)] top-1/2">
      <Svg12 />
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[14px] w-[130px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre-wrap">Live Monitoring</p>
      </div>
    </div>
  );
}

function Tab() {
  return (
    <div className="absolute bg-[#1d283a] h-[40px] left-0 rounded-[6px] top-0 w-[420px]" data-name="Tab">
      <Frame11 />
    </div>
  );
}

function Svg13() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.pea6a680} id="Vector" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p390c2e80} id="Vector_2" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Frame13() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex gap-[8px] items-center left-[calc(50%+0.43px)] top-1/2">
      <Svg13 />
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[#94a3b8] text-[14px] text-center w-[60.86px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre-wrap">Analytics</p>
      </div>
    </div>
  );
}

function Tab1() {
  return (
    <div className="absolute bg-[#1d283a] h-[40px] left-[837px] rounded-[6px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] top-0 w-[420px]" data-name="Tab">
      <Frame13 />
    </div>
  );
}

function Svg14() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p37f49070} id="Vector" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 5.33333V7.99935" id="Vector_2" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 10.6667H8.00667" id="Vector_3" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Frame12() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex gap-[8px] items-center left-[calc(50%-0.46px)] top-1/2">
      <Svg14 />
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[#f8fafc] text-[14px] w-[103px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre-wrap">Events</p>
      </div>
    </div>
  );
}

function Tab2() {
  return (
    <div className="absolute bg-[#3364eb] h-[40px] left-[419px] rounded-[6px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] top-0 w-[420px]" data-name="Tab">
      <Frame12 />
    </div>
  );
}

function ChildSafetyTablist() {
  return (
    <div className="absolute bg-[#1d283a] inset-[42.6%_0_47.01%_0] rounded-[6px]" data-name="child-safety-tablist">
      <Tab />
      <Tab1 />
      <Tab2 />
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents inset-[3.46%_0_0_0]">
      <HeaderAtChildMonitoring />
      <Group6 />
      <ChildSafetyTablist />
    </div>
  );
}

function HSPpeStatusCards() {
  return (
    <div className="absolute h-[385px] left-0 right-0 top-[37px]" data-name="h&s_ppe_status_cards">
      <Group7 />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[1704px] left-0 overflow-clip right-0 top-0" data-name="Container">
      <Tabpanel1 />
      <HSPpeStatusCards />
    </div>
  );
}

function Tabpanel() {
  return (
    <div className="absolute h-[1704px] left-[40px] right-[40px] top-[-29px]" data-name="Tabpanel">
      <Container />
    </div>
  );
}

function Main() {
  return (
    <div className="absolute bg-[rgba(29,40,58,0.4)] inset-[64px_327px_-101px_256px]" data-name="Main">
      <Tabpanel />
    </div>
  );
}

function Svg15() {
  return (
    <div className="-translate-y-1/2 absolute left-[15.74px] size-[20px] top-[calc(50%-9px)]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.p14d24500} id="Vector" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10 5V10L13.3333 11.6667" id="Vector_2" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundBorderShadow2() {
  return (
    <div className="absolute bg-[#0f1729] border border-[#1d283a] border-solid h-[63.47px] left-[875.47px] overflow-clip rounded-[6px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] top-[-0.12px] w-[163.7px]" data-name="Background+Border+Shadow">
      <Svg15 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold h-[24px] justify-center leading-[0] left-[43.73px] text-[#f8fafc] text-[16px] top-[19.75px] w-[102.464px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px] whitespace-pre-wrap">11:25:55 AM</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[14.25px] justify-center leading-[0] left-[calc(50%+0.1px)] text-[#94a3b8] text-[12px] text-center top-[44.85px] tracking-[0.25px] w-[70.714px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre-wrap">Mon, Dec 22</p>
      </div>
    </div>
  );
}

function Svg16() {
  return (
    <div className="-translate-y-1/2 absolute left-[9.74px] size-[12px] top-1/2" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="SVG">
          <path d="M6 10H6.005" id="Vector" stroke="var(--stroke-0, #21C45D)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p31254580} id="Vector_2" stroke="var(--stroke-0, #21C45D)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p1d7d8400} id="Vector_3" stroke="var(--stroke-0, #21C45D)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p26a3d980} id="Vector_4" stroke="var(--stroke-0, #21C45D)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function OverlayBorder() {
  return (
    <div className="-translate-y-1/2 absolute bg-[rgba(33,196,93,0.1)] border border-[#21c45d] border-solid h-[21.48px] left-[1270.97px] rounded-[9999px] top-[calc(50%-0.01px)] w-[164.43px]" data-name="Overlay+Border">
      <Svg16 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] left-[25.74px] text-[#21c45d] text-[12px] top-[9.75px] w-[127.14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px] whitespace-pre-wrap">AI Engine: Connected</p>
      </div>
    </div>
  );
}

function Svg17() {
  return (
    <div className="-translate-y-1/2 absolute left-[9.74px] size-[12px] top-1/2" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="SVG">
          <path d={svgPaths.p36a3cc00} id="Vector" stroke="var(--stroke-0, #21C45D)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p26ad4900} id="Vector_2" stroke="var(--stroke-0, #21C45D)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M3 3H3.005" id="Vector_3" stroke="var(--stroke-0, #21C45D)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M3 9H3.005" id="Vector_4" stroke="var(--stroke-0, #21C45D)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function OverlayBorder1() {
  return (
    <div className="-translate-y-1/2 absolute bg-[rgba(33,196,93,0.1)] border border-[#21c45d] border-solid h-[21.48px] left-[1443.39px] rounded-[9999px] top-[calc(50%-0.01px)] w-[129.13px]" data-name="Overlay+Border">
      <Svg17 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] left-[25.74px] text-[#21c45d] text-[12px] top-[9.75px] w-[91.84px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px] whitespace-pre-wrap">API: Connected</p>
      </div>
    </div>
  );
}

function Svg18() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-57.8px)] size-[16px] top-[calc(50%-0.01px)]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p19d57600} fill="var(--fill-0, #F8FAFC)" id="Vector" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button70() {
  return (
    <div className="-translate-y-1/2 absolute backdrop-blur-[2px] bg-[#ef4343] border border-[#ef4343] border-solid h-[36px] left-[1584.52px] overflow-clip rounded-[6px] shadow-[0px_10px_15px_-3px_rgba(239,68,68,0.25),0px_4px_6px_-4px_rgba(239,68,68,0.25)] top-[calc(50%-0.01px)] w-[160px]" data-name="Button">
      <Svg18 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Roboto:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] left-[calc(50%+12.09px)] text-[#f8fafc] text-[14px] text-center top-[16.99px] w-[107.8px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre-wrap">Stop Processing</p>
      </div>
      <div className="absolute bg-[#ef4343] inset-[-0.25px] opacity-0 rounded-[6px]" data-name="Gradient" />
    </div>
  );
}

function Svg19() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[16px] top-1/2" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p962cac0} id="Vector" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p271e9f04} id="Vector_2" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Background6() {
  return (
    <div className="absolute bg-[#3364eb] right-[-4.24px] rounded-[9999px] size-[19.99px] top-[-4.25px]" data-name="Background">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[12px] justify-center leading-[0] left-[calc(50%+0.11px)] text-[#f8fafc] text-[10px] text-center top-[calc(50%-0.24px)] tracking-[0.25px] w-[13.4px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre-wrap">9+</p>
      </div>
    </div>
  );
}

function ButtonMenuNotifications23Unread() {
  return (
    <div className="-translate-y-1/2 absolute bg-[#0f1729] border border-[#1d283a] border-solid left-[1756.51px] rounded-[6px] size-[40px] top-[calc(50%+0.01px)]" data-name="Button menu - Notifications, 23 unread">
      <Svg19 />
      <Background6 />
    </div>
  );
}

function Svg20() {
  return (
    <div className="absolute left-[8.99px] size-[16px] top-[8.99px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p2e2b8570} id="Vector" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function ButtonMenu() {
  return (
    <div className="-translate-y-1/2 absolute bg-[#0f1729] border border-[#1d283a] border-solid left-[1808.51px] rounded-[9999px] size-[36px] top-[calc(50%-0.01px)]" data-name="Button menu">
      <Svg20 />
    </div>
  );
}

function Container100() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip rounded-[9999px] size-[31.99px] top-1/2" data-name="Container">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgContainer} />
      </div>
    </div>
  );
}

function ButtonMenu1() {
  return (
    <div className="-translate-y-1/2 absolute left-[1856.51px] rounded-[9999px] size-[31.99px] top-[calc(50%-0.01px)]" data-name="Button menu">
      <Container100 />
    </div>
  );
}

function Header() {
  return (
    <div className="absolute bg-[#0f1729] border-[#1d283a] border-b-[0.75px] border-solid h-[64px] left-0 right-0 top-0" data-name="Header">
      <BackgroundBorderShadow2 />
      <OverlayBorder />
      <OverlayBorder1 />
      <Button70 />
      <ButtonMenuNotifications23Unread />
      <ButtonMenu />
      <ButtonMenu1 />
    </div>
  );
}

function Navbar() {
  return (
    <div className="bg-[#0f1729] border-[#1d283a] border-b-[0.75px] border-solid h-[64px] pointer-events-auto sticky top-0" data-name="Navbar">
      <Header />
    </div>
  );
}

function Heading6() {
  return (
    <div className="-translate-y-1/2 absolute border border-[#1d283a] border-solid h-[20px] left-[7.75px] overflow-clip top-[calc(50%+70.37px)] w-[107.06px]" data-name="Heading 3">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[16.5px] justify-center leading-[0] left-[-1px] text-[#f8fafc] text-[14px] top-[8.75px] tracking-[0.25px] w-[107.26px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre-wrap">LobbyNOC-CEO</p>
      </div>
    </div>
  );
}

function Svg21() {
  return (
    <div className="-translate-y-1/2 absolute left-[265.51px] size-[12px] top-[calc(50%+70.36px)]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="SVG">
          <path d="M7.5 1.5H10.5V4.5" id="Vector" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5 7L10.5 1.5" id="Vector_2" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.pc1a2200} id="Vector_3" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Overlay() {
  return (
    <div className="absolute bg-[#0f1729] h-[29.5px] left-[8px] rounded-[9999px] top-[7.99px] w-[130.16px]" data-name="Overlay">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[16.5px] justify-center leading-[0] left-[12.75px] text-[#f8fafc] text-[14px] top-[calc(50%-0.25px)] tracking-[0.25px] w-[104.86px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre-wrap">Zone of interest</p>
      </div>
    </div>
  );
}

function Background7() {
  return (
    <div className="absolute bg-[#1d283a] h-[160.73px] left-[-0.25px] right-[-0.25px] top-[-0.25px]" data-name="Background">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[100.09%] left-0 max-w-none top-[-0.04%] w-full" src={imgBackground} />
      </div>
      <Overlay />
    </div>
  );
}

function Link() {
  return (
    <div className="absolute bg-[#0f1729] border border-[#1d283a] border-solid h-[218.21px] left-0 overflow-clip right-0 rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] top-0" data-name="Link">
      <Heading6 />
      <Svg21 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] left-[7.75px] not-italic text-[#94a3b8] text-[12px] top-[200.48px] w-[43.95px]">
        <p className="leading-[16px] whitespace-pre-wrap">1:01 PM</p>
      </div>
      <Background7 />
    </div>
  );
}

function Heading7() {
  return (
    <div className="-translate-y-1/2 absolute h-[20px] left-[7.75px] overflow-clip top-[calc(50%+70.37px)] w-[123.49px]" data-name="Heading 3">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[16.5px] justify-center leading-[0] left-0 text-[#f8fafc] text-[14px] top-[9.75px] tracking-[0.25px] w-[123.69px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre-wrap">MainHallReception</p>
      </div>
    </div>
  );
}

function Svg22() {
  return (
    <div className="-translate-y-1/2 absolute left-[265.51px] size-[12px] top-[calc(50%+70.36px)]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="SVG">
          <path d="M7.5 1.5H10.5V4.5" id="Vector" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5 7L10.5 1.5" id="Vector_2" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.pc1a2200} id="Vector_3" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Overlay1() {
  return (
    <div className="absolute bg-[#0f1729] h-[29.5px] left-[8px] rounded-[9999px] top-[7.99px] w-[138.68px]" data-name="Overlay">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[16.5px] justify-center leading-[0] left-[12.75px] text-[#f8fafc] text-[14px] top-[calc(50%-0.25px)] tracking-[0.25px] w-[113.38px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre-wrap">Face Recognition</p>
      </div>
    </div>
  );
}

function Background8() {
  return (
    <div className="absolute bg-[#0f1729] h-[160.73px] left-[-0.25px] right-[-0.25px] top-[-0.25px]" data-name="Background">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[100.09%] left-0 max-w-none top-[-0.04%] w-full" src={imgBackground1} />
      </div>
      <Overlay1 />
    </div>
  );
}

function Link1() {
  return (
    <div className="absolute bg-[#0f1729] border border-[#1d283a] border-solid h-[218.21px] left-0 overflow-clip right-0 rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] top-[240px]" data-name="Link">
      <Heading7 />
      <Svg22 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] left-[7.26px] text-[#94a3b8] text-[12px] top-[200.33px] tracking-[0.25px] w-[49px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre-wrap">1:01 PM</p>
      </div>
      <Background8 />
    </div>
  );
}

function Heading8() {
  return (
    <div className="-translate-y-1/2 absolute h-[20px] left-[7.75px] overflow-clip top-[calc(50%+70.37px)] w-[68.86px]" data-name="Heading 3">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[16.5px] justify-center leading-[0] left-0 text-[#f8fafc] text-[14px] top-[9.75px] tracking-[0.25px] w-[69.06px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre-wrap">NOCRoom</p>
      </div>
    </div>
  );
}

function Svg23() {
  return (
    <div className="-translate-y-1/2 absolute left-[265.51px] size-[12px] top-[calc(50%+70.36px)]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="SVG">
          <path d="M7.5 1.5H10.5V4.5" id="Vector" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5 7L10.5 1.5" id="Vector_2" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.pc1a2200} id="Vector_3" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Overlay2() {
  return (
    <div className="absolute bg-[#0f1729] h-[29.5px] left-[8px] rounded-[9999px] top-[7.99px] w-[138.68px]" data-name="Overlay">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[16.5px] justify-center leading-[0] left-[12.75px] text-[#f8fafc] text-[14px] top-[calc(50%-0.25px)] tracking-[0.25px] w-[113.38px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre-wrap">Face Recognition</p>
      </div>
    </div>
  );
}

function Background9() {
  return (
    <div className="absolute bg-[#0f1729] h-[160.73px] left-[-0.25px] right-[-0.25px] top-[-0.25px]" data-name="Background">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[100.09%] left-0 max-w-none top-[-0.04%] w-full" src={imgBackground2} />
      </div>
      <Overlay2 />
    </div>
  );
}

function Link2() {
  return (
    <div className="absolute bg-[#0f1729] border border-[#1d283a] border-solid h-[218.21px] left-0 overflow-clip right-0 rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] top-[480px]" data-name="Link">
      <Heading8 />
      <Svg23 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] left-[7.26px] text-[#94a3b8] text-[12px] top-[200.33px] tracking-[0.25px] w-[49px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre-wrap">1:01 PM</p>
      </div>
      <Background9 />
    </div>
  );
}

function Heading9() {
  return (
    <div className="-translate-y-1/2 absolute h-[20px] left-[7.75px] overflow-clip top-[calc(50%+70.37px)] w-[123.49px]" data-name="Heading 3">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[16.5px] justify-center leading-[0] left-0 text-[#f8fafc] text-[14px] top-[9.75px] tracking-[0.25px] w-[123.69px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre-wrap">MainHallReception</p>
      </div>
    </div>
  );
}

function Svg24() {
  return (
    <div className="-translate-y-1/2 absolute left-[265.51px] size-[12px] top-[calc(50%+70.36px)]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="SVG">
          <path d="M7.5 1.5H10.5V4.5" id="Vector" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5 7L10.5 1.5" id="Vector_2" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.pc1a2200} id="Vector_3" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Overlay3() {
  return (
    <div className="absolute bg-[#0f1729] h-[29.5px] left-[8px] rounded-[9999px] top-[7.99px] w-[171.96px]" data-name="Overlay">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[16.5px] justify-center leading-[0] left-[12.75px] text-[#f8fafc] text-[14px] top-[calc(50%-0.25px)] tracking-[0.25px] w-[146.66px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre-wrap">Age/Gender Detection</p>
      </div>
    </div>
  );
}

function Background10() {
  return (
    <div className="absolute bg-[#0f1729] h-[160.73px] left-[-0.25px] right-[-0.25px] top-[-0.25px]" data-name="Background">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[100.09%] left-0 max-w-none top-[-0.04%] w-full" src={imgBackground3} />
      </div>
      <Overlay3 />
    </div>
  );
}

function Link3() {
  return (
    <div className="absolute bg-[#0f1729] border border-[#1d283a] border-solid h-[218.21px] left-0 overflow-clip right-0 rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] top-[720px]" data-name="Link">
      <Heading9 />
      <Svg24 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] left-[7.26px] text-[#94a3b8] text-[12px] top-[200.33px] tracking-[0.25px] w-[50px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre-wrap">1:01 PM</p>
      </div>
      <Background10 />
    </div>
  );
}

function Heading10() {
  return (
    <div className="-translate-y-1/2 absolute h-[20px] left-[7.75px] overflow-clip top-[calc(50%+70.37px)] w-[123.49px]" data-name="Heading 3">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[16.5px] justify-center leading-[0] left-0 text-[#f8fafc] text-[14px] top-[9.75px] tracking-[0.25px] w-[123.69px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre-wrap">MainHallReception</p>
      </div>
    </div>
  );
}

function Svg25() {
  return (
    <div className="-translate-y-1/2 absolute left-[265.51px] size-[12px] top-[calc(50%+70.36px)]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="SVG">
          <path d="M7.5 1.5H10.5V4.5" id="Vector" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5 7L10.5 1.5" id="Vector_2" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.pc1a2200} id="Vector_3" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Overlay4() {
  return (
    <div className="absolute bg-[#0f1729] h-[29.5px] left-[8px] rounded-[9999px] top-[7.99px] w-[161.6px]" data-name="Overlay">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[16.5px] justify-center leading-[0] left-[12.75px] text-[#f8fafc] text-[14px] top-[calc(50%-0.25px)] tracking-[0.25px] w-[136.3px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre-wrap">Emotion Recognition</p>
      </div>
    </div>
  );
}

function Background11() {
  return (
    <div className="absolute bg-[#0f1729] h-[160.73px] left-[-0.25px] right-[-0.25px] top-[-0.25px]" data-name="Background">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[100.09%] left-0 max-w-none top-[-0.04%] w-full" src={imgBackground4} />
      </div>
      <Overlay4 />
    </div>
  );
}

function Link4() {
  return (
    <div className="absolute bg-[#0f1729] border border-[#1d283a] border-solid h-[218.21px] left-0 overflow-clip right-0 rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] top-[960px]" data-name="Link">
      <Heading10 />
      <Svg25 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] left-[7.75px] text-[#94a3b8] text-[12px] top-[200.48px] tracking-[0.25px] w-[45.94px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre-wrap">1:00 PM</p>
      </div>
      <Background11 />
    </div>
  );
}

function Heading11() {
  return (
    <div className="-translate-y-1/2 absolute h-[20px] left-[7.75px] overflow-clip top-[calc(50%+70.37px)] w-[107.06px]" data-name="Heading 3">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[16.5px] justify-center leading-[0] left-0 text-[#f8fafc] text-[14px] top-[9.75px] tracking-[0.25px] w-[107.26px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre-wrap">LobbyCEO-NOC</p>
      </div>
    </div>
  );
}

function Svg26() {
  return (
    <div className="-translate-y-1/2 absolute left-[265.51px] size-[12px] top-[calc(50%+70.36px)]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="SVG">
          <path d="M7.5 1.5H10.5V4.5" id="Vector" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5 7L10.5 1.5" id="Vector_2" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.pc1a2200} id="Vector_3" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Overlay5() {
  return (
    <div className="absolute bg-[#0f1729] h-[29.5px] left-[8px] rounded-[9999px] top-[7.99px] w-[69.79px]" data-name="Overlay">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[16.5px] justify-center leading-[0] left-[12.75px] text-[#f8fafc] text-[14px] top-[calc(50%-0.25px)] tracking-[0.25px] w-[44.49px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre-wrap">Events</p>
      </div>
    </div>
  );
}

function Background12() {
  return (
    <div className="absolute bg-[#0f1729] h-[160.73px] left-[-0.25px] right-[-0.25px] top-[-0.25px]" data-name="Background">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[100.09%] left-0 max-w-none top-[-0.04%] w-full" src={imgBackground5} />
      </div>
      <Overlay5 />
    </div>
  );
}

function Link5() {
  return (
    <div className="absolute bg-[#0f1729] border border-[#1d283a] border-solid h-[218.21px] left-0 overflow-clip right-0 rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] top-[1200px]" data-name="Link">
      <Heading11 />
      <Svg26 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] left-[7.75px] text-[#94a3b8] text-[12px] top-[200.48px] tracking-[0.25px] w-[45.94px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre-wrap">1:00 PM</p>
      </div>
      <Background12 />
    </div>
  );
}

function Heading12() {
  return (
    <div className="-translate-y-1/2 absolute h-[20px] left-[7.75px] overflow-clip top-[calc(50%+70.37px)] w-[68.86px]" data-name="Heading 3">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[16.5px] justify-center leading-[0] left-0 text-[#f8fafc] text-[14px] top-[9.75px] tracking-[0.25px] w-[69.06px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre-wrap">NOCRoom</p>
      </div>
    </div>
  );
}

function Svg27() {
  return (
    <div className="-translate-y-1/2 absolute left-[265.51px] size-[12px] top-[calc(50%+70.36px)]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="SVG">
          <path d="M7.5 1.5H10.5V4.5" id="Vector" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5 7L10.5 1.5" id="Vector_2" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.pc1a2200} id="Vector_3" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Overlay6() {
  return (
    <div className="absolute bg-[#0f1729] h-[29.5px] left-[8px] rounded-[9999px] top-[7.99px] w-[161.6px]" data-name="Overlay">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[16.5px] justify-center leading-[0] left-[12.75px] text-[#f8fafc] text-[14px] top-[calc(50%-0.25px)] tracking-[0.25px] w-[136.3px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre-wrap">Emotion Recognition</p>
      </div>
    </div>
  );
}

function Background13() {
  return (
    <div className="absolute bg-[#0f1729] h-[160.73px] left-[-0.25px] right-[-0.25px] top-[-0.25px]" data-name="Background">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[100.09%] left-0 max-w-none top-[-0.04%] w-full" src={imgBackground6} />
      </div>
      <Overlay6 />
    </div>
  );
}

function Link6() {
  return (
    <div className="absolute bg-[#0f1729] border border-[#1d283a] border-solid h-[218.21px] left-0 overflow-clip right-0 rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] top-[1440px]" data-name="Link">
      <Heading12 />
      <Svg27 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] left-[7.75px] text-[#94a3b8] text-[12px] top-[200.48px] tracking-[0.25px] w-[45.94px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre-wrap">1:00 PM</p>
      </div>
      <Background13 />
    </div>
  );
}

function Heading13() {
  return (
    <div className="-translate-y-1/2 absolute h-[20px] left-[7.75px] overflow-clip top-[calc(50%+70.37px)] w-[107.06px]" data-name="Heading 3">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[16.5px] justify-center leading-[0] left-0 text-[#f8fafc] text-[14px] top-[9.75px] tracking-[0.25px] w-[107.26px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre-wrap">LobbyNOC-CEO</p>
      </div>
    </div>
  );
}

function Svg28() {
  return (
    <div className="-translate-y-1/2 absolute left-[265.51px] size-[12px] top-[calc(50%+70.36px)]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="SVG">
          <path d="M7.5 1.5H10.5V4.5" id="Vector" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5 7L10.5 1.5" id="Vector_2" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.pc1a2200} id="Vector_3" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Overlay7() {
  return (
    <div className="absolute bg-[#0f1729] h-[29.5px] left-[8px] rounded-[9999px] top-[7.99px] w-[171.96px]" data-name="Overlay">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[16.5px] justify-center leading-[0] left-[12.75px] text-[#f8fafc] text-[14px] top-[calc(50%-0.25px)] tracking-[0.25px] w-[146.66px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre-wrap">Age/Gender Detection</p>
      </div>
    </div>
  );
}

function Background14() {
  return (
    <div className="absolute bg-[#0f1729] h-[160.73px] left-[-0.25px] right-[-0.25px] top-[-0.25px]" data-name="Background">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[100.09%] left-0 max-w-none top-[-0.04%] w-full" src={imgBackground7} />
      </div>
      <Overlay7 />
    </div>
  );
}

function Link7() {
  return (
    <div className="absolute bg-[#0f1729] border border-[#1d283a] border-solid h-[218.21px] left-0 overflow-clip right-0 rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] top-[1680px]" data-name="Link">
      <Heading13 />
      <Svg28 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] left-[7.75px] text-[#94a3b8] text-[12px] top-[200.48px] tracking-[0.25px] w-[53.31px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre-wrap">12:59 PM</p>
      </div>
      <Background14 />
    </div>
  );
}

function Heading14() {
  return (
    <div className="-translate-y-1/2 absolute h-[20px] left-[7.75px] overflow-clip top-[calc(50%+70.37px)] w-[107.06px]" data-name="Heading 3">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[16.5px] justify-center leading-[0] left-0 text-[#f8fafc] text-[14px] top-[9.75px] tracking-[0.25px] w-[107.26px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre-wrap">LobbyNOC-CEO</p>
      </div>
    </div>
  );
}

function Svg29() {
  return (
    <div className="-translate-y-1/2 absolute left-[265.51px] size-[12px] top-[calc(50%+70.36px)]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="SVG">
          <path d="M7.5 1.5H10.5V4.5" id="Vector" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5 7L10.5 1.5" id="Vector_2" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.pc1a2200} id="Vector_3" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Overlay8() {
  return (
    <div className="absolute bg-[#0f1729] h-[29.5px] left-[8px] rounded-[9999px] top-[7.99px] w-[138.68px]" data-name="Overlay">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[16.5px] justify-center leading-[0] left-[12.75px] text-[#f8fafc] text-[14px] top-[calc(50%-0.25px)] tracking-[0.25px] w-[113.38px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre-wrap">Face Recognition</p>
      </div>
    </div>
  );
}

function Background15() {
  return (
    <div className="absolute bg-[#0f1729] h-[160.73px] left-[-0.25px] right-[-0.25px] top-[-0.25px]" data-name="Background">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[100.09%] left-0 max-w-none top-[-0.04%] w-full" src={imgBackground8} />
      </div>
      <Overlay8 />
    </div>
  );
}

function Link8() {
  return (
    <div className="absolute bg-[#0f1729] border border-[#1d283a] border-solid h-[218.21px] left-0 overflow-clip right-0 rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] top-[1920px]" data-name="Link">
      <Heading14 />
      <Svg29 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] left-[7.75px] text-[#94a3b8] text-[12px] top-[200.48px] tracking-[0.25px] w-[53.33px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre-wrap">12:58 PM</p>
      </div>
      <Background15 />
    </div>
  );
}

function Heading15() {
  return (
    <div className="-translate-y-1/2 absolute h-[20px] left-[7.75px] overflow-clip top-[calc(50%+70.37px)] w-[107.06px]" data-name="Heading 3">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[16.5px] justify-center leading-[0] left-0 text-[#f8fafc] text-[14px] top-[9.75px] tracking-[0.25px] w-[107.26px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre-wrap">LobbyNOC-CEO</p>
      </div>
    </div>
  );
}

function Svg30() {
  return (
    <div className="-translate-y-1/2 absolute left-[265.51px] size-[12px] top-[calc(50%+70.36px)]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="SVG">
          <path d="M7.5 1.5H10.5V4.5" id="Vector" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5 7L10.5 1.5" id="Vector_2" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.pc1a2200} id="Vector_3" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Overlay9() {
  return (
    <div className="absolute bg-[#0f1729] h-[29.5px] left-[8px] rounded-[9999px] top-[7.99px] w-[161.6px]" data-name="Overlay">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[16.5px] justify-center leading-[0] left-[12.75px] text-[#f8fafc] text-[14px] top-[calc(50%-0.25px)] tracking-[0.25px] w-[136.3px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre-wrap">Emotion Recognition</p>
      </div>
    </div>
  );
}

function Background16() {
  return (
    <div className="absolute bg-[#0f1729] h-[160.73px] left-[-0.25px] right-[-0.25px] top-[-0.25px]" data-name="Background">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[100.09%] left-0 max-w-none top-[-0.04%] w-full" src={imgBackground9} />
      </div>
      <Overlay9 />
    </div>
  );
}

function Link9() {
  return (
    <div className="absolute bg-[#0f1729] border border-[#1d283a] border-solid h-[218.21px] left-0 overflow-clip right-0 rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] top-[2160px]" data-name="Link">
      <Heading15 />
      <Svg30 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] left-[7.75px] text-[#94a3b8] text-[12px] top-[200.48px] tracking-[0.25px] w-[53.33px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre-wrap">12:58 PM</p>
      </div>
      <Background16 />
    </div>
  );
}

function Heading16() {
  return (
    <div className="-translate-y-1/2 absolute h-[20px] left-[7.75px] overflow-clip top-[calc(50%+70.37px)] w-[107.06px]" data-name="Heading 3">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[16.5px] justify-center leading-[0] left-0 text-[#f8fafc] text-[14px] top-[9.75px] tracking-[0.25px] w-[107.26px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre-wrap">LobbyCEO-NOC</p>
      </div>
    </div>
  );
}

function Svg31() {
  return (
    <div className="-translate-y-1/2 absolute left-[265.51px] size-[12px] top-[calc(50%+70.36px)]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="SVG">
          <path d="M7.5 1.5H10.5V4.5" id="Vector" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5 7L10.5 1.5" id="Vector_2" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.pc1a2200} id="Vector_3" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Overlay10() {
  return (
    <div className="absolute bg-[#0f1729] h-[29.5px] left-[8px] rounded-[9999px] top-[7.99px] w-[138.68px]" data-name="Overlay">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[16.5px] justify-center leading-[0] left-[12.75px] text-[#f8fafc] text-[14px] top-[calc(50%-0.25px)] tracking-[0.25px] w-[113.38px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre-wrap">Face Recognition</p>
      </div>
    </div>
  );
}

function Background17() {
  return (
    <div className="absolute bg-[#0f1729] h-[160.73px] left-[-0.25px] right-[-0.25px] top-[-0.25px]" data-name="Background">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgBackground10} />
      </div>
      <Overlay10 />
    </div>
  );
}

function Link10() {
  return (
    <div className="absolute bg-[#0f1729] border border-[#1d283a] border-solid h-[218.21px] left-0 overflow-clip right-0 rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] top-[2400px]" data-name="Link">
      <Heading16 />
      <Svg31 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] left-[7.75px] text-[#94a3b8] text-[12px] top-[200.48px] tracking-[0.25px] w-[53.33px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre-wrap">12:58 PM</p>
      </div>
      <Background17 />
    </div>
  );
}

function Container102() {
  return (
    <div className="absolute h-[743.32px] left-[15.99px] overflow-auto right-[16px] top-[15.99px]" data-name="Container">
      <Link />
      <Link1 />
      <Link2 />
      <Link3 />
      <Link4 />
      <Link5 />
      <Link6 />
      <Link7 />
      <Link8 />
      <Link9 />
      <Link10 />
    </div>
  );
}

function Container101() {
  return (
    <div className="absolute inset-[150.68px_0_0_0] overflow-clip" data-name="Container">
      <Container102 />
    </div>
  );
}

function Svg32() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-31.47px)] size-[16px] top-[calc(50%-0.01px)]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p19987d80} id="Vector" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M13.9992 2V5.33252H10.6667" id="Vector_2" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2a3e9c80} id="Vector_3" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M5.33252 10.6667H2V13.9992" id="Vector_4" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button71() {
  return (
    <div className="-translate-y-1/2 absolute bg-[#0f1729] border border-[#1d283a] border-solid h-[31.99px] left-[198.79px] rounded-[6px] top-[calc(50%-42.98px)] w-[104.45px]" data-name="Button">
      <Svg32 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] left-[calc(50%+14.1px)] text-[#f8fafc] text-[14px] text-center top-[14.99px] tracking-[0.25px] w-[51.16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre-wrap">Refresh</p>
      </div>
    </div>
  );
}

function Svg33() {
  return (
    <div className="-translate-y-1/2 absolute left-[15.99px] size-[19.99px] top-[calc(50%-42.99px)]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.99 19.99">
        <g id="SVG">
          <path d={svgPaths.p2e935a00} id="Vector" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66583" />
          <path d={svgPaths.p27582600} id="Vector_2" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66583" />
        </g>
      </svg>
    </div>
  );
}

function SelectCameraResolution() {
  return <div className="-translate-y-1/2 absolute h-[24px] left-[166.72px] overflow-clip top-[calc(50%+17.24px)] w-[80px]" data-name="Select-Camera-Resolution" />;
}

function Border() {
  return (
    <div className="-translate-y-1/2 absolute border border-[#0f1729] border-solid h-[21.48px] right-[15.99px] rounded-[9999px] top-[calc(50%+48.23px)] w-[40.34px]" data-name="Border">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Medium',sans-serif] font-medium h-[13.5px] justify-center leading-[0] left-[9.74px] text-[#f8fafc] text-[12px] top-[calc(50%-0.5px)] w-[19.04px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px] whitespace-pre-wrap">Off</p>
      </div>
    </div>
  );
}

function Container103() {
  return (
    <div className="-translate-y-1/2 absolute h-[15px] left-[11.5px] overflow-clip top-[calc(50%+0.25px)] w-[98.25px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[13.5px] justify-center leading-[0] left-0 text-[#f8fafc] text-[12px] top-[7.5px] tracking-[0.25px] w-[72.47px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre-wrap">All Usecases</p>
      </div>
    </div>
  );
}

function Svg34() {
  return (
    <div className="-translate-y-1/2 absolute left-[121px] size-[16px] top-[calc(50%+1px)]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Options() {
  return (
    <div className="-translate-y-1/2 absolute bg-[#0f1729] border border-[#1d283a] border-solid h-[24px] left-0 rounded-[4px] top-1/2 w-[142px]" data-name="Options">
      <Container103 />
      <Svg34 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[142px]">
      <Options />
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute h-[130px] left-0 top-0 w-[143px]">
      <Frame7 />
    </div>
  );
}

function SelectCameraFilters() {
  return (
    <div className="-translate-y-1/2 absolute h-[24px] left-[15.99px] overflow-clip top-[calc(50%+17.24px)] w-[143px]" data-name="Select-Camera Filters">
      <Frame8 />
    </div>
  );
}

function HorizontalBorder2() {
  return (
    <div className="absolute border-[#1d283a] border-b-[0.75px] border-solid h-[150.68px] left-0 right-0 top-0" data-name="HorizontalBorder">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[13px] justify-center leading-[0] left-[213.25px] text-[#94a3b8] text-[12px] top-[63.5px] tracking-[0.25px] w-[98px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre-wrap">Total frames: 15</p>
      </div>
      <Button71 />
      <Svg33 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold h-[28px] justify-center leading-[0] left-[43.98px] text-[#f8fafc] text-[16px] top-[31.98px] w-[119.66px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px] whitespace-pre-wrap">Latest Frames</p>
      </div>
      <div className="-translate-y-1/2 absolute bg-[#21c45d] left-[15.99px] rounded-[9999px] size-[7.99px] top-[calc(50%-11px)]" data-name="Background" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] left-[29.99px] text-[#21c45d] text-[12px] top-[63.98px] tracking-[0.25px] w-[84.06px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre-wrap">Auto-updating</p>
      </div>
      <SelectCameraResolution />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] left-[214.09px] text-[#94a3b8] text-[12px] top-[123.19px] tracking-[0.25px] w-[41.03px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre-wrap">Debug:</p>
      </div>
      <Border />
      <SelectCameraFilters />
    </div>
  );
}

function Container104() {
  return (
    <div className="-translate-y-1/2 absolute h-[15px] left-[12px] overflow-clip top-[calc(50%-0.5px)] w-[36px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[14px] justify-center leading-[0] left-[0.5px] text-[#f8fafc] text-[12px] top-[calc(50%-0.25px)] tracking-[0.25px] w-[36px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre-wrap">480p</p>
      </div>
    </div>
  );
}

function Svg35() {
  return (
    <div className="-translate-y-1/2 absolute left-[58px] size-[16px] top-1/2" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Options1() {
  return (
    <div className="-translate-y-1/2 absolute bg-[#0f1729] border border-[#1d283a] border-solid h-[24px] left-0 rounded-[4px] top-1/2 w-[80px]" data-name="Options">
      <Container104 />
      <Svg35 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[80px]">
      <Options1 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute h-[130px] left-0 top-0 w-[143px]">
      <Frame10 />
    </div>
  );
}

function SelectCameraResolution1() {
  return (
    <div className="absolute h-[24px] left-[171.25px] overflow-clip top-[80px] w-[80px]" data-name="Select-Camera Resolution">
      <Frame9 />
    </div>
  );
}

function CameraFeeds() {
  return (
    <div className="absolute bg-[#0f1729] border-[#1d283a] border-l-[0.75px] border-solid h-[925.99px] left-[1600.01px] overflow-clip shadow-[-2px_0px_5px_0px_rgba(0,0,0,0.05)] top-[64px] w-[319.99px]" data-name="camera_feeds">
      <Container101 />
      <HorizontalBorder2 />
      <SelectCameraResolution1 />
    </div>
  );
}

function Background() {
  return (
    <div className="absolute bg-[#0f1729] h-[888px] left-0 right-0 top-0" data-name="Background">
      <div className="absolute h-[888px] left-0 top-[64px] w-[256px]" data-name="Rectangle" />
      <Main />
      <div className="absolute h-[888px] inset-[0_7.5px_0_0] pointer-events-none">
        <Navbar />
      </div>
      <CameraFeeds />
    </div>
  );
}

function Svg36() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[24px] top-1/2" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d="M7 2H17" id="Vector" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M5 6H19" id="Vector_2" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p205cc080} id="Vector_3" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Background18() {
  return (
    <div className="-translate-y-1/2 absolute bg-[#3364eb] left-[8px] rounded-[8px] size-[36px] top-1/2" data-name="Background">
      <Svg36 />
    </div>
  );
}

function ListItemLink() {
  return (
    <div className="absolute h-[48px] left-0 overflow-clip right-0 rounded-[6px] top-0" data-name="List → Item → Link">
      <Background18 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:SemiBold',sans-serif] font-semibold h-[24px] justify-center leading-[0] left-[51.99px] text-[#f8fafc] text-[16px] top-[16.01px] w-[157.18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px] whitespace-pre-wrap">Facility Management</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] left-[51.99px] text-[#94a3b8] text-[12px] top-[36.01px] w-[72.33px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px] whitespace-pre-wrap">Admin Portal</p>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute h-[48px] left-[7.99px] top-[8px] w-[223.28px]">
      <ListItemLink />
    </div>
  );
}

function Svg37() {
  return (
    <div className="-translate-y-1/2 absolute left-[8px] size-[16px] top-[calc(50%-0.01px)]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p90824c0} id="Vector" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M12 11.3333V6" id="Vector_2" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8.66667 11.3333V3.33333" id="Vector_3" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M5.33333 11.3328V9.33333" id="Vector_4" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container106() {
  return (
    <div className="-translate-y-1/2 absolute h-[20px] left-[31.98px] overflow-clip top-[calc(50%+0.01px)] w-[71.99px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Medium',sans-serif] font-medium h-[16.5px] justify-center leading-[0] left-0 text-[#f8fafc] text-[14px] top-[9.75px] w-[72.19px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre-wrap">Dashboard</p>
      </div>
    </div>
  );
}

function ItemLink() {
  return (
    <div className="h-[31.99px] overflow-clip relative rounded-[6px] shrink-0 w-full" data-name="Item → Link">
      <Svg37 />
      <Container106 />
    </div>
  );
}

function Svg38() {
  return (
    <div className="-translate-y-1/2 absolute left-[8px] size-[16px] top-[calc(50%-0.01px)]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p3cddd200} id="Vector" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p168ff2c0} id="Vector_2" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.pa8d100} id="Vector_3" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 4H9.33268" id="Vector_4" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 6.66667H9.33268" id="Vector_5" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 9.33333H9.33268" id="Vector_6" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 12H9.33268" id="Vector_7" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container107() {
  return (
    <div className="-translate-y-1/2 absolute h-[20px] left-[31.98px] overflow-clip top-[calc(50%+0.01px)] w-[75.75px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[16.5px] justify-center leading-[0] left-0 text-[#f8fafc] text-[14px] top-[9.75px] w-[75.95px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre-wrap">All Facilities</p>
      </div>
    </div>
  );
}

function ItemLink1() {
  return (
    <div className="h-[31.99px] overflow-clip relative rounded-[6px] shrink-0 w-full" data-name="Item → Link">
      <Svg38 />
      <Container107 />
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="List">
      <ItemLink />
      <ItemLink1 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-[223.28px]">
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium h-[13.5px] justify-center leading-[0] relative shrink-0 text-[#f8fafc] text-[12px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px] whitespace-pre-wrap">Main</p>
      </div>
      <List />
    </div>
  );
}

function Svg39() {
  return (
    <div className="relative size-[12px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="SVG">
          <path d="M3 4.5L6 7.5L9 4.5" id="Vector" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function ButtonCollapseZone() {
  return (
    <div className="-translate-y-1/2 absolute left-0 rounded-[4px] size-[19.99px] top-[calc(50%-0.01px)]" data-name="Button - Collapse zone">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex items-center justify-center left-[calc(50%+0.01px)] size-[12px] top-[calc(50%+0.01px)]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <Svg39 />
        </div>
      </div>
    </div>
  );
}

function Svg40() {
  return (
    <div className="-translate-y-1/2 absolute left-[7.99px] size-[16px] top-1/2" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p14548f00} id="Vector" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3468ba00} id="Vector_2" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container108() {
  return (
    <div className="-translate-y-1/2 absolute h-[20px] left-[31.98px] overflow-clip top-1/2 w-[39.65px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16.5px] justify-center leading-[0] left-0 not-italic text-[#f8fafc] text-[13.5px] top-[9.75px] w-[39.85px]">
        <p className="leading-[20px] whitespace-pre-wrap">Lobby</p>
      </div>
    </div>
  );
}

function Link11() {
  return (
    <div className="-translate-y-1/2 absolute h-[28px] left-[22.99px] overflow-clip right-[0.93px] rounded-[6px] top-1/2" data-name="Link">
      <Svg40 />
      <Container108 />
    </div>
  );
}

function Lobby() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Lobby">
      <ButtonCollapseZone />
      <Link11 />
    </div>
  );
}

function Svg41() {
  return (
    <div className="relative size-[12px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="SVG">
          <path d="M3 4.5L6 7.5L9 4.5" id="Vector" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function ButtonCollapseZone1() {
  return (
    <div className="-translate-y-1/2 absolute left-0 rounded-[4px] size-[19.99px] top-[calc(50%-0.01px)]" data-name="Button - Collapse zone">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex items-center justify-center left-[calc(50%+0.01px)] size-[12px] top-[calc(50%+0.01px)]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <Svg41 />
        </div>
      </div>
    </div>
  );
}

function Svg42() {
  return (
    <div className="-translate-y-1/2 absolute left-[7.99px] size-[16px] top-1/2" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p14548f00} id="Vector" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3468ba00} id="Vector_2" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container109() {
  return (
    <div className="-translate-y-1/2 absolute h-[20px] left-[32.01px] overflow-clip top-1/2 w-[115px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[17px] justify-center leading-[0] left-[0.03px] text-[#f8fafc] text-[12px] top-[9.5px] tracking-[0.25px] w-[120px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre-wrap">Main Entrance</p>
      </div>
    </div>
  );
}

function Link12() {
  return (
    <div className="-translate-y-1/2 absolute h-[28px] left-[22.99px] overflow-clip right-[0.95px] rounded-[6px] top-1/2" data-name="Link">
      <Svg42 />
      <Container109 />
    </div>
  );
}

function Component1MainEntrance() {
  return (
    <div className="h-[28px] relative shrink-0 w-[166px]" data-name="1 Main Entrance">
      <ButtonCollapseZone1 />
      <Link12 />
    </div>
  );
}

function Svg43() {
  return (
    <div className="relative size-[12px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="SVG">
          <path d="M3 4.5L6 7.5L9 4.5" id="Vector" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function ButtonCollapseZone2() {
  return (
    <div className="-translate-y-1/2 absolute left-0 rounded-[4px] size-[19.99px] top-[calc(50%-0.01px)]" data-name="Button - Collapse zone">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex items-center justify-center left-[calc(50%+0.01px)] size-[12px] top-[calc(50%+0.01px)]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <Svg43 />
        </div>
      </div>
    </div>
  );
}

function Svg44() {
  return (
    <div className="-translate-y-1/2 absolute left-[7.99px] size-[16px] top-1/2" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p14548f00} id="Vector" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3468ba00} id="Vector_2" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container110() {
  return (
    <div className="-translate-y-1/2 absolute h-[20px] left-[32.01px] overflow-clip top-1/2 w-[115px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[17px] justify-center leading-[0] left-[0.03px] text-[#f8fafc] text-[12px] top-[9.5px] tracking-[0.25px] w-[120px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre-wrap">Main Hall</p>
      </div>
    </div>
  );
}

function Link13() {
  return (
    <div className="-translate-y-1/2 absolute h-[28px] left-[22.99px] overflow-clip right-[0.95px] rounded-[6px] top-1/2" data-name="Link">
      <Svg44 />
      <Container110 />
    </div>
  );
}

function Component1MainHall() {
  return (
    <div className="h-[28px] relative shrink-0 w-[166px]" data-name="1 Main Hall">
      <ButtonCollapseZone2 />
      <Link13 />
    </div>
  );
}

function Svg45() {
  return (
    <div className="relative size-[12px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="SVG">
          <path d="M3 4.5L6 7.5L9 4.5" id="Vector" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function ButtonCollapseZone3() {
  return (
    <div className="-translate-y-1/2 absolute left-0 rounded-[4px] size-[19.99px] top-[calc(50%-0.01px)]" data-name="Button - Collapse zone">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex items-center justify-center left-[calc(50%+0.01px)] size-[12px] top-[calc(50%+0.01px)]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <Svg45 />
        </div>
      </div>
    </div>
  );
}

function Svg46() {
  return (
    <div className="-translate-y-1/2 absolute left-[7.99px] size-[16px] top-1/2" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p14548f00} id="Vector" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3468ba00} id="Vector_2" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container111() {
  return (
    <div className="-translate-y-1/2 absolute h-[20px] left-[32.01px] overflow-clip top-1/2 w-[115px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[17px] justify-center leading-[0] left-[0.03px] text-[#f8fafc] text-[12px] top-[9.5px] tracking-[0.25px] w-[120px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre-wrap">Meeting Room</p>
      </div>
    </div>
  );
}

function Link14() {
  return (
    <div className="-translate-y-1/2 absolute h-[28px] left-[22.99px] overflow-clip right-[0.95px] rounded-[6px] top-1/2" data-name="Link">
      <Svg46 />
      <Container111 />
    </div>
  );
}

function Component1MeetingRoom() {
  return (
    <div className="h-[28px] relative shrink-0 w-[166px]" data-name="1 Meeting Room">
      <ButtonCollapseZone3 />
      <Link14 />
    </div>
  );
}

function Svg47() {
  return (
    <div className="relative size-[12px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="SVG">
          <path d="M3 4.5L6 7.5L9 4.5" id="Vector" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function ButtonCollapseZone4() {
  return (
    <div className="-translate-y-1/2 absolute left-0 rounded-[4px] size-[19.99px] top-[calc(50%-0.01px)]" data-name="Button - Collapse zone">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex items-center justify-center left-[calc(50%+0.01px)] size-[12px] top-[calc(50%+0.01px)]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <Svg47 />
        </div>
      </div>
    </div>
  );
}

function Svg48() {
  return (
    <div className="-translate-y-1/2 absolute left-[7.99px] size-[16px] top-1/2" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p14548f00} id="Vector" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3468ba00} id="Vector_2" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container112() {
  return (
    <div className="-translate-y-1/2 absolute h-[20px] left-[32.01px] overflow-clip top-1/2 w-[115px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[17px] justify-center leading-[0] left-[0.03px] text-[#f8fafc] text-[12px] top-[9.5px] tracking-[0.25px] w-[120px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre-wrap">NOC Room</p>
      </div>
    </div>
  );
}

function Link15() {
  return (
    <div className="-translate-y-1/2 absolute h-[28px] left-[22.99px] overflow-clip right-[0.95px] rounded-[6px] top-1/2" data-name="Link">
      <Svg48 />
      <Container112 />
    </div>
  );
}

function Component1NocRoom() {
  return (
    <div className="h-[28px] relative shrink-0 w-[166px]" data-name="1 NOC Room">
      <ButtonCollapseZone4 />
      <Link15 />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[25px] top-[31px] w-[190.976px]">
      <Lobby />
      <Component1MainEntrance />
      <Component1MainHall />
      <Component1MeetingRoom />
      <Component1NocRoom />
    </div>
  );
}

function ButtonExpandFacilitySvg() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-99.64px)] size-[16px] top-[calc(50%-0.01px)]" data-name="Button - Expand facility → SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Button - Expand facility â SVG">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Svg49() {
  return (
    <div className="-translate-y-1/2 absolute left-[7.99px] size-[16px] top-[calc(50%-0.01px)]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p3cddd200} id="Vector" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p168ff2c0} id="Vector_2" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.pa8d100} id="Vector_3" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 4H9.33268" id="Vector_4" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 6.66667H9.33268" id="Vector_5" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 9.33333H9.33268" id="Vector_6" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 12H9.33268" id="Vector_7" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container113() {
  return (
    <div className="-translate-y-1/2 absolute h-[20px] left-[31.98px] overflow-clip top-[calc(50%+0.01px)] w-[137.23px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[16.5px] justify-center leading-[0] left-0 text-[#f8fafc] text-[14px] top-[9.75px] tracking-[0.25px] w-[137.43px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre-wrap">OmniClouds Dubai</p>
      </div>
    </div>
  );
}

function Link16() {
  return (
    <div className="-translate-y-1/2 absolute h-[31.99px] left-[28px] overflow-clip right-0 rounded-[6px] top-1/2" data-name="Link">
      <Svg49 />
      <Container113 />
    </div>
  );
}

function Item() {
  return (
    <div className="absolute h-[31.99px] left-0 top-0 w-[223.28px]" data-name="Item">
      <ButtonExpandFacilitySvg />
      <Link16 />
    </div>
  );
}

function Component1OmniCloudsDubai() {
  return (
    <div className="h-[35px] overflow-clip relative shrink-0 w-[223.28px]" data-name="1 OmniClouds Dubai">
      <Frame />
      <Item />
    </div>
  );
}

function ButtonExpandFacilitySvg1() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-99.64px)] size-[16px] top-[calc(50%-0.01px)]" data-name="Button - Expand facility → SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Button - Expand facility â SVG">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Svg50() {
  return (
    <div className="-translate-y-1/2 absolute left-[7.99px] size-[16px] top-[calc(50%-0.01px)]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p3cddd200} id="Vector" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p168ff2c0} id="Vector_2" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.pa8d100} id="Vector_3" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 4H9.33268" id="Vector_4" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 6.66667H9.33268" id="Vector_5" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 9.33333H9.33268" id="Vector_6" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 12H9.33268" id="Vector_7" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container114() {
  return (
    <div className="-translate-y-1/2 absolute h-[20px] left-[31.98px] overflow-clip top-[calc(50%+0.01px)] w-[120.14px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[16.5px] justify-center leading-[0] left-0 text-[#f8fafc] text-[14px] top-[9.75px] w-[120.34px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre-wrap">OmniClouds Egypt</p>
      </div>
    </div>
  );
}

function Link17() {
  return (
    <div className="-translate-y-1/2 absolute h-[31.99px] left-[28px] overflow-clip right-0 rounded-[6px] top-1/2" data-name="Link">
      <Svg50 />
      <Container114 />
    </div>
  );
}

function Item1() {
  return (
    <div className="h-[31.99px] relative shrink-0 w-full" data-name="Item">
      <ButtonExpandFacilitySvg1 />
      <Link17 />
    </div>
  );
}

function ButtonExpandFacilitySvg2() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-99.64px)] size-[16px] top-[calc(50%-0.01px)]" data-name="Button - Expand facility → SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Button - Expand facility â SVG">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Svg51() {
  return (
    <div className="-translate-y-1/2 absolute left-[7.99px] size-[16px] top-[calc(50%-0.01px)]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p3cddd200} id="Vector" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p168ff2c0} id="Vector_2" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.pa8d100} id="Vector_3" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 4H9.33268" id="Vector_4" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 6.66667H9.33268" id="Vector_5" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 9.33333H9.33268" id="Vector_6" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 12H9.33268" id="Vector_7" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container115() {
  return (
    <div className="-translate-y-1/2 absolute h-[20px] left-[31.98px] overflow-clip top-[calc(50%+0.01px)] w-[137.23px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[16.5px] justify-center leading-[0] left-0 text-[#f8fafc] text-[14px] top-[9.75px] w-[137.43px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre-wrap">OmniClouds Pakistan</p>
      </div>
    </div>
  );
}

function Link18() {
  return (
    <div className="-translate-y-1/2 absolute h-[31.99px] left-[28px] overflow-clip right-0 rounded-[6px] top-1/2" data-name="Link">
      <Svg51 />
      <Container115 />
    </div>
  );
}

function Item2() {
  return (
    <div className="h-[31.99px] relative shrink-0 w-full" data-name="Item">
      <ButtonExpandFacilitySvg2 />
      <Link18 />
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="List">
      <Component1OmniCloudsDubai />
      <Item1 />
      <Item2 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-[223.28px]">
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium h-[13.5px] justify-center leading-[0] relative shrink-0 text-[#f8fafc] text-[12px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px] whitespace-pre-wrap">Navigation</p>
      </div>
      <List1 />
    </div>
  );
}

function Svg52() {
  return (
    <div className="-translate-y-1/2 absolute left-[8px] size-[16px] top-[calc(50%-0.01px)]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p37f49070} id="Vector" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 5.33333V7.99935" id="Vector_2" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 10.6667H8.00667" id="Vector_3" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container116() {
  return (
    <div className="-translate-y-1/2 absolute h-[20px] left-[31.98px] overflow-clip top-[calc(50%+0.01px)] w-[100.62px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[16.5px] justify-center leading-[0] left-0 text-[#f8fafc] text-[14px] top-[9.75px] tracking-[0.25px] w-[100.82px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre-wrap">{`Health & Safety`}</p>
      </div>
    </div>
  );
}

function ItemLink2() {
  return (
    <div className="h-[31.99px] overflow-clip relative rounded-[6px] shrink-0 w-full" data-name="Item → Link">
      <Svg52 />
      <Container116 />
    </div>
  );
}

function Svg53() {
  return (
    <div className="-translate-y-1/2 absolute left-[8px] size-[16px] top-[calc(50%-0.01px)]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p39ee6532} id="Vector" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p30be9df0} id="Vector_2" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6 6H6.00666" id="Vector_3" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10 6H10.0067" id="Vector_4" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container117() {
  return (
    <div className="-translate-y-1/2 absolute h-[20px] left-[32px] overflow-clip top-[calc(50%-0.45px)] w-[151px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[17px] justify-center leading-[0] left-0 text-[#f8fafc] text-[14px] top-[9.5px] tracking-[0.25px] w-[151px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre-wrap">Sentiment Analysis</p>
      </div>
    </div>
  );
}

function ItemLink3() {
  return (
    <div className="h-[31.99px] overflow-clip relative rounded-[6px] shrink-0 w-full" data-name="Item → Link">
      <Svg53 />
      <Container117 />
    </div>
  );
}

function Svg54() {
  return (
    <div className="-translate-y-1/2 absolute left-[8px] size-[16px] top-[calc(50%+0.01px)]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p9966100} id="Vector" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3694d280} id="Vector_2" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3891ffc0} id="Vector_3" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3bf3e100} id="Vector_4" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container118() {
  return (
    <div className="-translate-y-1/2 absolute h-[20px] left-[31.98px] overflow-clip top-[calc(50%+0.01px)] w-[60.13px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[16.5px] justify-center leading-[0] left-0 text-[#f8fafc] text-[14px] top-[9.75px] tracking-[0.25px] w-[60.33px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre-wrap">Presence</p>
      </div>
    </div>
  );
}

function ItemLink4() {
  return (
    <div className="h-[31.99px] overflow-clip relative rounded-[6px] shrink-0 w-full" data-name="Item → Link">
      <Svg54 />
      <Container118 />
    </div>
  );
}

function Svg55() {
  return (
    <div className="-translate-y-1/2 absolute left-[8px] size-[16px] top-[calc(50%-0.01px)]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p2f7a6500} id="Vector" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p305ad700} id="Vector_2" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container119() {
  return (
    <div className="-translate-y-1/2 absolute h-[20px] left-[31.98px] overflow-clip top-[calc(50%+0.01px)] w-[134.37px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] left-[0.02px] text-[#f8fafc] text-[14px] top-[9.57px] tracking-[0.25px] w-[150px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre-wrap">Access Management</p>
      </div>
    </div>
  );
}

function ItemLink5() {
  return (
    <div className="h-[31.99px] overflow-clip relative rounded-[6px] shrink-0 w-full" data-name="Item → Link">
      <Svg55 />
      <Container119 />
    </div>
  );
}

function Svg56() {
  return (
    <div className="-translate-y-1/2 absolute left-[8px] size-[16px] top-[calc(50%-0.01px)]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p39ee6532} id="Vector" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p245eb100} id="Vector_2" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.pd2da8f0} id="Vector_3" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container120() {
  return (
    <div className="-translate-y-1/2 absolute h-[20px] left-[31.98px] overflow-clip top-[calc(50%+0.01px)] w-[96.38px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[16.5px] justify-center leading-[0] left-0 text-[#f8fafc] text-[14px] top-[9.75px] tracking-[0.25px] w-[96.58px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre-wrap">ZOI Monitoring</p>
      </div>
    </div>
  );
}

function ItemLink6() {
  return (
    <div className="h-[31.99px] overflow-clip relative rounded-[6px] shrink-0 w-full" data-name="Item → Link">
      <Svg56 />
      <Container120 />
    </div>
  );
}

function Svg57() {
  return (
    <div className="-translate-y-1/2 absolute left-[8px] size-[16px] top-[calc(50%-0.01px)]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p90824c0} id="Vector" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M12 11.3333V6" id="Vector_2" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8.66667 11.3333V3.33333" id="Vector_3" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M5.33333 11.3328V9.33333" id="Vector_4" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container121() {
  return (
    <div className="-translate-y-1/2 absolute h-[20px] left-[31.98px] overflow-clip top-[calc(50%+0.01px)] w-[93.79px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[16.5px] justify-center leading-[0] left-0 text-[#f8fafc] text-[14px] top-[9.75px] tracking-[0.25px] w-[93.99px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre-wrap">Demographics</p>
      </div>
    </div>
  );
}

function ItemLink7() {
  return (
    <div className="h-[31.99px] overflow-clip relative rounded-[6px] shrink-0 w-full" data-name="Item → Link">
      <Svg57 />
      <Container121 />
    </div>
  );
}

function Svg58() {
  return (
    <div className="-translate-y-1/2 absolute left-[8px] size-[16px] top-[calc(50%-0.01px)]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.pad05c0} id="Vector" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3fa69ef0} id="Vector_2" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container122() {
  return (
    <div className="-translate-y-1/2 absolute h-[20px] left-[31.98px] overflow-clip top-[calc(50%+0.01px)] w-[95.52px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] left-[0.02px] text-[#f8fafc] text-[14px] top-[9.6px] tracking-[0.25px] w-[116px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre-wrap">Visitor Insights</p>
      </div>
    </div>
  );
}

function ItemLink8() {
  return (
    <div className="h-[31.99px] overflow-clip relative rounded-[6px] shrink-0 w-full" data-name="Item → Link">
      <Svg58 />
      <Container122 />
    </div>
  );
}

function Svg59() {
  return (
    <div className="-translate-y-1/2 absolute left-[8px] size-[16px] top-[calc(50%-0.01px)]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p2a2e0600} id="Vector" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 6V8.66602" id="Vector_2" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 11.3333H8.00667" id="Vector_3" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container123() {
  return (
    <div className="-translate-y-1/2 absolute h-[20px] left-[31.87px] overflow-clip top-[calc(50%-0.38px)] w-[196px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] left-[-0.11px] text-[#f8fafc] text-[14px] top-[9.61px] tracking-[0.25px] w-[181px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre-wrap">Suspicious Behavior</p>
      </div>
    </div>
  );
}

function ItemLink9() {
  return (
    <div className="h-[31.99px] overflow-clip relative rounded-[6px] shrink-0 w-full" data-name="Item → Link">
      <Svg59 />
      <Container123 />
    </div>
  );
}

function Svg60() {
  return (
    <div className="-translate-y-1/2 absolute left-[8px] size-[16px] top-[calc(50%-0.01px)]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p37f49070} id="Vector" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 5.33333V7.99935" id="Vector_2" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 10.6667H8.00667" id="Vector_3" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container124() {
  return (
    <div className="-translate-y-1/2 absolute h-[20px] left-[31.87px] overflow-clip top-[calc(50%-0.38px)] w-[196px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] left-[-0.11px] text-[#f8fafc] text-[14px] top-[9.61px] tracking-[0.25px] w-[181px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre-wrap">Child Safety</p>
      </div>
    </div>
  );
}

function ItemLink10() {
  return (
    <div className="h-[31.99px] overflow-clip relative rounded-[6px] shrink-0 w-full" data-name="Item → Link">
      <Svg60 />
      <Container124 />
    </div>
  );
}

function List2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] items-start left-0 right-0 top-0" data-name="List">
      <ItemLink2 />
      <ItemLink3 />
      <ItemLink4 />
      <ItemLink5 />
      <ItemLink6 />
      <ItemLink7 />
      <ItemLink8 />
      <ItemLink9 />
      <ItemLink10 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="h-[247.93px] relative shrink-0 w-full">
      <List2 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-[223.28px]">
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium h-[13.5px] justify-center leading-[0] relative shrink-0 text-[#f8fafc] text-[12px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[16px] whitespace-pre-wrap">Quick Access</p>
      </div>
      <Frame1 />
    </div>
  );
}

function Container105() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] h-[686px] items-start left-[0.13px] overflow-auto px-[8px] py-[17px] top-[64px] w-[239px]" data-name="Container">
      <Frame4 />
      <Frame3 />
      <Frame2 />
    </div>
  );
}

function Svg61() {
  return (
    <div className="-translate-y-1/2 absolute left-[8px] size-[16px] top-[calc(50%-0.01px)]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p150bed80} id="Vector" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p21868700} id="Vector_2" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66634 6H5.33333" id="Vector_3" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 8.66667H5.33333" id="Vector_4" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 11.3333H5.33333" id="Vector_5" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container125() {
  return (
    <div className="-translate-y-1/2 absolute h-[20px] left-[31.98px] overflow-clip top-[calc(50%+0.01px)] w-[50.44px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[16.5px] justify-center leading-[0] left-0 text-[#f8fafc] text-[14px] top-[9.75px] tracking-[0.25px] w-[50.64px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre-wrap">Reports</p>
      </div>
    </div>
  );
}

function ItemLink11() {
  return (
    <div className="absolute h-[31.99px] left-0 overflow-clip right-0 rounded-[6px] top-0" data-name="Item → Link">
      <Svg61 />
      <Container125 />
    </div>
  );
}

function Svg62() {
  return (
    <div className="-translate-y-1/2 absolute left-[8px] size-[16px] top-[calc(50%+0.01px)]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p20904080} id="Vector" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3fa69ef0} id="Vector_2" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container126() {
  return (
    <div className="-translate-y-1/2 absolute h-[20px] left-[31.98px] overflow-clip top-[calc(50%+0.01px)] w-[53.37px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal h-[16.5px] justify-center leading-[0] left-0 text-[#f8fafc] text-[14px] top-[9.75px] tracking-[0.25px] w-[53.57px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre-wrap">Settings</p>
      </div>
    </div>
  );
}

function ItemLink12() {
  return (
    <div className="absolute h-[31.99px] left-0 overflow-clip right-0 rounded-[6px] top-[35.98px]" data-name="Item → Link">
      <Svg62 />
      <Container126 />
    </div>
  );
}

function List3() {
  return (
    <div className="h-[67.98px] relative shrink-0 w-full" data-name="List">
      <ItemLink11 />
      <ItemLink12 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[8px] top-[896px] w-[223.28px]">
      <List3 />
    </div>
  );
}

function Sidebar() {
  return (
    <div className="absolute bg-[#0f1729] h-[974px] left-0 top-0 w-[239.26px]" data-name="sidebar">
      <Frame6 />
      <Container105 />
      <Frame5 />
    </div>
  );
}

export default function ChildSafetyEvents() {
  return (
    <div className="relative size-full" data-name="child-safety-events" style={{ backgroundImage: "linear-gradient(90deg, rgb(15, 23, 41) 0%, rgb(15, 23, 41) 100%), linear-gradient(90deg, rgb(248, 250, 252) 0%, rgb(248, 250, 252) 100%)" }}>
      <Background />
      <Sidebar />
    </div>
  );
}