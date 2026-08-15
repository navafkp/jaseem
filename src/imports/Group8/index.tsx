export default function Group() {
  return (
    <div className="contents relative size-full">
      <div className="absolute bg-[rgba(255,255,255,0.14)] h-[38px] left-0 rounded-[15px] top-0 w-[94px]" />
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] left-0 text-[#9a6506] text-[20px] top-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[32px]">{`Home `}</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] left-0 text-[20px] text-[rgba(65,73,68,0.75)] top-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[32px]">About</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] left-0 text-[20px] text-[rgba(65,73,68,0.75)] top-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[32px]">Benefits</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] left-0 text-[20px] text-[rgba(65,73,68,0.75)] top-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        <p className="leading-[32px]">Contact</p>
      </div>
    </div>
  );
}