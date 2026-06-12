"use client";

import { useEffect } from "react";
import Link from "next/link";
import { site } from "@/content/site";
import { InstagramIcon } from "./icons";

export default function InstagramFollow() {
  const { overline, heading, subheading, handle, href } = site.instagram;

  useEffect(() => {
    if (typeof window !== "undefined" && !(window as unknown as Record<string, unknown>).instgrm) {
      const s = document.createElement("script");
      s.src = "https://www.instagram.com/embed.js";
      s.async = true;
      document.body.appendChild(s);
    } else if ((window as unknown as Record<string, unknown>).instgrm) {
      (window as unknown as { instgrm: { Embeds: { process: () => void } } }).instgrm.Embeds.process();
    }
  }, []);

  return (
    <section className="py-24 sm:py-32 bg-[var(--color-bg-muted)]">
      <div className="container-wide">
        <div className="text-center mb-12 reveal">
          <p className="overline mb-3">{overline}</p>
          <h2 className="font-display text-4xl sm:text-5xl mb-4">{heading}</h2>
          <p className="text-ink-muted max-w-xl mx-auto mb-6">{subheading}</p>
          <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm tracking-wide hover:text-accent transition"
          >
            <InstagramIcon className="w-5 h-5" />
            {handle}
          </Link>
        </div>

        <div className="flex justify-center">
          <blockquote
            className="instagram-media"
            data-instgrm-permalink="https://www.instagram.com/ericadebear/?utm_source=ig_embed&utm_campaign=loading"
            data-instgrm-version="14"
            style={{
              background: "#FFF",
              border: 0,
              borderRadius: "3px",
              boxShadow: "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
              margin: "1px",
              maxWidth: "540px",
              minWidth: "326px",
              padding: 0,
              width: "99.375%",
            }}
          >
            <div style={{ padding: "16px" }}>
              <a
                href="https://www.instagram.com/ericadebear/?utm_source=ig_embed&utm_campaign=loading"
                style={{
                  background: "#FFFFFF",
                  lineHeight: 0,
                  padding: "0 0",
                  textAlign: "center",
                  textDecoration: "none",
                  width: "100%",
                }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                  <div
                    style={{
                      backgroundColor: "#F4F4F4",
                      borderRadius: "50%",
                      flexGrow: 0,
                      height: "40px",
                      marginRight: "14px",
                      width: "40px",
                    }}
                  />
                  <div style={{ display: "flex", flexDirection: "column", flexGrow: 1, justifyContent: "center" }}>
                    <div
                      style={{
                        backgroundColor: "#F4F4F4",
                        borderRadius: "4px",
                        flexGrow: 0,
                        height: "14px",
                        marginBottom: "6px",
                        width: "100px",
                      }}
                    />
                    <div
                      style={{
                        backgroundColor: "#F4F4F4",
                        borderRadius: "4px",
                        flexGrow: 0,
                        height: "14px",
                        width: "60px",
                      }}
                    />
                  </div>
                </div>
                <div style={{ padding: "19% 0" }} />
                <div style={{ display: "block", height: "50px", margin: "0 auto 12px", width: "50px" }} />
                <div style={{ paddingTop: "8px" }}>
                  <div
                    style={{
                      color: "#3897f0",
                      fontFamily: "Arial,sans-serif",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: 550,
                      lineHeight: "18px",
                    }}
                  >
                    View this profile on Instagram
                  </div>
                </div>
              </a>
              <p
                style={{
                  color: "#c9c8cd",
                  fontFamily: "Arial,sans-serif",
                  fontSize: "14px",
                  lineHeight: "17px",
                  marginBottom: 0,
                  marginTop: "8px",
                  overflow: "hidden",
                  padding: "8px 0 7px",
                  textAlign: "center",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap" as const,
                }}
              >
                <a
                  href="https://www.instagram.com/ericadebear/?utm_source=ig_embed&utm_campaign=loading"
                  style={{
                    color: "#c9c8cd",
                    fontFamily: "Arial,sans-serif",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: "normal",
                    lineHeight: "17px",
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Erica DeBear
                </a>{" "}
                (@
                <a
                  href="https://www.instagram.com/ericadebear/?utm_source=ig_embed&utm_campaign=loading"
                  style={{
                    color: "#c9c8cd",
                    fontFamily: "Arial,sans-serif",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: "normal",
                    lineHeight: "17px",
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ericadebear
                </a>
                )
              </p>
            </div>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
