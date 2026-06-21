export default function AtlasBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_73%_28%,rgba(56,198,217,0.18),transparent_34%),radial-gradient(circle_at_42%_74%,rgba(201,162,39,0.11),transparent_28%),linear-gradient(180deg,#05080d_0%,#07101a_48%,#05080d_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,8,13,0.14)_0%,rgba(5,8,13,0.08)_42%,rgba(5,8,13,0.58)_100%)]" />

      <div
        className="atlas-grid-mask absolute inset-0 opacity-[0.11]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(56,198,217,0.48) 1px, transparent 1px), linear-gradient(90deg, rgba(56,198,217,0.38) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1440 900" fill="none">
        <g opacity="0.55">
          <path d="M0 676H428L472 718H1440" stroke="rgba(56,198,217,0.42)" />
          <path d="M1048 52H1260L1304 96V242" stroke="rgba(56,198,217,0.28)" />
          <path d="M1194 250H1340L1388 296V472" stroke="rgba(56,198,217,0.32)" />
          <path d="M36 124H176L210 158H334" stroke="rgba(201,162,39,0.26)" />
          <path d="M94 720H262L310 768H518" stroke="rgba(139,32,32,0.35)" />
        </g>

        <g className="atlas-line-drift" opacity="0.82">
          <path
            d="M823 122C770 190 758 270 812 338C874 416 868 492 800 566C742 629 700 704 674 792"
            stroke="rgba(56,198,217,0.36)"
          />
          <path
            d="M900 118C840 214 850 304 930 388C1014 476 1012 576 928 688"
            stroke="rgba(56,198,217,0.28)"
          />
          <path
            d="M1024 116C950 238 964 346 1068 438C1162 522 1160 628 1066 756"
            stroke="rgba(201,162,39,0.3)"
          />
        </g>

        <g transform="translate(768 116)" opacity="0.88">
          <path
            d="M244 20C192 38 154 78 142 130C132 172 150 206 184 232C224 264 236 310 208 356C180 402 182 448 216 498C238 530 230 570 190 602C142 640 102 688 70 746"
            stroke="rgba(56,198,217,0.74)"
            strokeWidth="2"
          />
          <path
            d="M210 68C176 96 160 134 166 182C172 224 200 250 240 274C282 300 300 340 282 386C262 438 278 486 322 532"
            stroke="rgba(56,198,217,0.42)"
            strokeWidth="1.3"
          />
          <path
            d="M120 180C182 156 252 162 324 198C392 232 438 286 462 360C486 434 472 504 420 570"
            stroke="rgba(56,198,217,0.32)"
          />
          <path
            d="M78 254C156 224 236 226 318 260C400 294 458 350 492 428"
            stroke="rgba(56,198,217,0.24)"
          />
          <path
            d="M36 334C124 302 214 304 306 342C398 380 464 444 504 534"
            stroke="rgba(201,162,39,0.26)"
          />
          <path
            d="M264 112L384 192L468 348L412 520L302 610L190 602L216 498L208 356L184 232L142 130L264 112Z"
            stroke="rgba(226,232,240,0.1)"
          />
          <circle cx="264" cy="112" r="4" fill="rgba(201,162,39,0.82)" />
          <circle cx="468" cy="348" r="3.5" fill="rgba(56,198,217,0.9)" />
          <circle cx="302" cy="610" r="3.5" fill="rgba(201,162,39,0.72)" />
        </g>

        <g opacity="0.72">
          <path d="M102 308H180" stroke="rgba(56,198,217,0.55)" />
          <path d="M102 344H246" stroke="rgba(56,198,217,0.3)" />
          <path d="M102 380H212" stroke="rgba(56,198,217,0.25)" />
          <path d="M1224 164H1338" stroke="rgba(56,198,217,0.48)" />
          <path d="M1224 190H1306" stroke="rgba(56,198,217,0.26)" />
          <path d="M1224 216H1358" stroke="rgba(56,198,217,0.3)" />
        </g>
      </svg>

      <div className="absolute inset-y-0 left-0 w-[42%] bg-[linear-gradient(90deg,#05080d_0%,rgba(5,8,13,0.88)_58%,transparent_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-44 bg-[linear-gradient(180deg,transparent,#05080d_78%)]" />
    </div>
  );
}
