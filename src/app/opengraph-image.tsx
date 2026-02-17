import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Elisabeth Jane — Hand-Painted Recipe Boxes";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#FAF7F2",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Outer decorative border */}
        <div
          style={{
            position: "absolute",
            top: "20px",
            left: "20px",
            right: "20px",
            bottom: "20px",
            border: "1.5px solid #E5DFD5",
            borderRadius: "4px",
            display: "flex",
          }}
        />

        {/* Inner decorative border */}
        <div
          style={{
            position: "absolute",
            top: "28px",
            left: "28px",
            right: "28px",
            bottom: "28px",
            border: "0.5px solid #E5DFD5",
            borderRadius: "2px",
            display: "flex",
          }}
        />

        {/* Top-left leaf motif */}
        <div
          style={{
            position: "absolute",
            top: "36px",
            left: "40px",
            display: "flex",
          }}
        >
          <svg
            width="56"
            height="56"
            viewBox="0 0 56 56"
          >
            <path
              d="M28 6 C18 16 8 20 8 32 C8 44 17 52 28 52 C39 52 48 44 48 32 C48 20 38 16 28 6Z"
              fill="none"
              stroke="#C0CCBD"
              strokeWidth="1.2"
            />
            <path d="M28 6 L28 52" fill="none" stroke="#C0CCBD" strokeWidth="0.8" />
            <path d="M28 24 C22 19 14 26 18 32" fill="none" stroke="#C0CCBD" strokeWidth="0.8" />
            <path d="M28 24 C34 19 42 26 38 32" fill="none" stroke="#C0CCBD" strokeWidth="0.8" />
          </svg>
        </div>

        {/* Bottom-right leaf motif (mirrored) */}
        <div
          style={{
            position: "absolute",
            bottom: "36px",
            right: "40px",
            display: "flex",
            transform: "rotate(180deg)",
          }}
        >
          <svg
            width="56"
            height="56"
            viewBox="0 0 56 56"
          >
            <path
              d="M28 6 C18 16 8 20 8 32 C8 44 17 52 28 52 C39 52 48 44 48 32 C48 20 38 16 28 6Z"
              fill="none"
              stroke="#C0CCBD"
              strokeWidth="1.2"
            />
            <path d="M28 6 L28 52" fill="none" stroke="#C0CCBD" strokeWidth="0.8" />
            <path d="M28 24 C22 19 14 26 18 32" fill="none" stroke="#C0CCBD" strokeWidth="0.8" />
            <path d="M28 24 C34 19 42 26 38 32" fill="none" stroke="#C0CCBD" strokeWidth="0.8" />
          </svg>
        </div>

        {/* Top-right strawberry */}
        <div
          style={{
            position: "absolute",
            top: "40px",
            right: "48px",
            display: "flex",
          }}
        >
          <svg width="26" height="34" viewBox="0 0 28 36">
            <path d="M14 5 C10 3 9 1 14 1 C19 1 18 3 14 5Z" fill="#4E6150" />
            <path
              d="M14 5 C7 9 3 16 5 24 C7 30 10 34 14 36 C18 34 21 30 23 24 C25 16 21 9 14 5Z"
              fill="#C17B7B"
            />
            <circle cx="10" cy="16" r="1" fill="#FAF7F2" opacity="0.5" />
            <circle cx="17" cy="14" r="1" fill="#FAF7F2" opacity="0.5" />
            <circle cx="14" cy="21" r="1" fill="#FAF7F2" opacity="0.5" />
            <circle cx="10" cy="26" r="1" fill="#FAF7F2" opacity="0.5" />
            <circle cx="17" cy="28" r="1" fill="#FAF7F2" opacity="0.5" />
          </svg>
        </div>

        {/* Bottom-left strawberry */}
        <div
          style={{
            position: "absolute",
            bottom: "42px",
            left: "50px",
            display: "flex",
          }}
        >
          <svg width="22" height="28" viewBox="0 0 28 36">
            <path d="M14 5 C10 3 9 1 14 1 C19 1 18 3 14 5Z" fill="#4E6150" />
            <path
              d="M14 5 C7 9 3 16 5 24 C7 30 10 34 14 36 C18 34 21 30 23 24 C25 16 21 9 14 5Z"
              fill="#C17B7B"
            />
            <circle cx="11" cy="17" r="1" fill="#FAF7F2" opacity="0.5" />
            <circle cx="17" cy="15" r="1" fill="#FAF7F2" opacity="0.5" />
            <circle cx="14" cy="22" r="1" fill="#FAF7F2" opacity="0.5" />
          </svg>
        </div>

        {/* Left vine */}
        <div
          style={{
            position: "absolute",
            left: "44px",
            top: "50%",
            transform: "translateY(-50%)",
            display: "flex",
          }}
        >
          <svg width="10" height="100" viewBox="0 0 10 100">
            <path d="M5 0 C3 17 7 33 5 50 C3 67 7 83 5 100" fill="none" stroke="#C0CCBD" strokeWidth="0.8" />
            <path d="M5 25 C1 21 -1 25 3 28" fill="none" stroke="#C0CCBD" strokeWidth="0.6" />
            <path d="M5 50 C9 46 11 50 7 53" fill="none" stroke="#C0CCBD" strokeWidth="0.6" />
            <path d="M5 75 C1 71 -1 75 3 78" fill="none" stroke="#C0CCBD" strokeWidth="0.6" />
          </svg>
        </div>

        {/* Right vine */}
        <div
          style={{
            position: "absolute",
            right: "44px",
            top: "50%",
            transform: "translateY(-50%)",
            display: "flex",
          }}
        >
          <svg width="10" height="100" viewBox="0 0 10 100">
            <path d="M5 0 C7 17 3 33 5 50 C7 67 3 83 5 100" fill="none" stroke="#C0CCBD" strokeWidth="0.8" />
            <path d="M5 25 C9 21 11 25 7 28" fill="none" stroke="#C0CCBD" strokeWidth="0.6" />
            <path d="M5 50 C1 46 -1 50 3 53" fill="none" stroke="#C0CCBD" strokeWidth="0.6" />
            <path d="M5 75 C9 71 11 75 7 78" fill="none" stroke="#C0CCBD" strokeWidth="0.6" />
          </svg>
        </div>

        {/* Main content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Brand name */}
          <div
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "82px",
              fontWeight: 400,
              color: "#3B4A3A",
              lineHeight: 1.1,
              letterSpacing: "1px",
              fontStyle: "normal",
            }}
          >
            Elisabeth Jane
          </div>

          {/* Decorative divider */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              marginTop: "22px",
              marginBottom: "22px",
            }}
          >
            <div
              style={{
                width: "72px",
                height: "1px",
                backgroundColor: "#C0CCBD",
                display: "flex",
              }}
            />
            <svg width="14" height="14" viewBox="0 0 14 14">
              <path
                d="M7 0 C8 3 11 3 14 3 C11 5 11 8 12 11 C9 9 7 10 5 12 C5 9 3 7 0 6 C3 5 5 3 7 0Z"
                fill="#C0CCBD"
              />
            </svg>
            <div
              style={{
                width: "72px",
                height: "1px",
                backgroundColor: "#C0CCBD",
                display: "flex",
              }}
            />
          </div>

          {/* Tagline */}
          <div
            style={{
              fontFamily: "Helvetica Neue, sans-serif",
              fontSize: "24px",
              fontWeight: 300,
              color: "#6B6B6B",
              lineHeight: 1.7,
              textAlign: "center",
              maxWidth: "680px",
              letterSpacing: "0.5px",
            }}
          >
            Hand-painted recipe boxes made to be
          </div>
          <div
            style={{
              fontFamily: "Helvetica Neue, sans-serif",
              fontSize: "24px",
              fontWeight: 300,
              color: "#6B6B6B",
              lineHeight: 1.7,
              textAlign: "center",
              letterSpacing: "0.5px",
            }}
          >
            used, loved, and passed down.
          </div>

          {/* URL */}
          <div
            style={{
              fontFamily: "Helvetica Neue, sans-serif",
              fontSize: "16px",
              fontWeight: 400,
              color: "#8A9B87",
              marginTop: "30px",
              letterSpacing: "3px",
              textTransform: "uppercase",
            }}
          >
            elisabethjane.com
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
