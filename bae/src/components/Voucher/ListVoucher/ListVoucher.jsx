import React, { useState } from "react";
import styles from "./ListVoucher.module.scss";
import Voucher from "../../common/voucher/voucher";

function ListVoucher({ listvoucher }) {
  return (
    <div className={styles.voucher_screen_container}>
      <div className={styles.filter_header}>
        <h2 className={styles.title}>Danh sách Voucher</h2>
      </div>
      <div className={styles.voucher_list}>
        {listvoucher.map((item) => (
          <Voucher
            key={item.id}
            item={item}
            img={
              <div
                className="img_voucher"
                style={{
                  width: "72px",
                  height: "72px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  position: "relative",
                  border: "3px solid #fff",
                }}
              >
                {/* Gift box with open lid */}
                <svg
                  width="44"
                  height="44"
                  viewBox="0 0 40 40"
                  style={{ zIndex: 2 }}
                >
                  {/* Box base */}
                  <rect
                    x="8"
                    y="18"
                    width="24"
                    height="14"
                    rx="4"
                    fill="rgb(6, 217, 114)"
                    stroke="#56CCF2"
                    strokeWidth="2"
                  />
                  {/* Box lid (opened) */}
                  <rect
                    x="6"
                    y="12"
                    width="28"
                    height="8"
                    rx="2"
                    fill="#56CCF2"
                    stroke="rgb(6, 217, 114)"
                    strokeWidth="1"
                    transform="rotate(-12 20 16)"
                  />
                  {/* Ribbon */}
                  <rect x="18" y="18" width="4" height="14" fill="#fff" />
                  {/* Bow */}
                  <ellipse cx="16" cy="14" rx="3" ry="2" fill="#fff" />
                  <ellipse cx="24" cy="14" rx="3" ry="2" fill="#fff" />
                </svg>
                {/* Text below the gift */}
                <span
                  style={{
                    marginTop: "6px",
                    fontWeight: "bold",
                    color: "rgb(6, 217, 114)",
                    fontSize: "14px",
                    letterSpacing: "0.5px",
                    textShadow: "0 1px 4px #56CCF299",
                  }}
                >
                  Quà tặng
                </span>
              </div>
            }
          >
            {item.IDClient === 0 ? (
              <button className={styles.redeem_button}>Đổi ngay</button>
            ) : (
              <></>
            )}
          </Voucher>
        ))}
      </div>
    </div>
  );
}

export default ListVoucher;
