import React from "react";
import styles from "./ListBranch.module.scss";

export default function ListBranch({ branches = [] , onClickBranch }) {
  if (!Array.isArray(branches) || branches.length === 0) {
    return (
      <section className={styles.wrap}>
        <h3 className={styles.title}>Đối tác đổi thưởng</h3>
        <div className={styles.empty}>Không có đối tác</div>
      </section>
    );
  }

  return (
    <section className={styles.wrap}>
      <h3 className={styles.title}>Đối tác đổi thưởng</h3>
      <div className={styles.grid}>
        {branches.map((b) => {
          const id = b.id ?? b._id ?? b.name_branch_voucher;
          const name = b.name_branch_voucher ?? b.name ?? "Unknown";
          return (
            <div
              key={id}
              className={styles.card}
              style={{
                borderColor: b.color,
                boxShadow: `0 4px 16px 0 ${b.color}22`,
              }}
              onClick={() => {onClickBranch(b.id);}}
            >
              <div
                className={styles.logoWrap}
                style={{
                  background: `linear-gradient(135deg, ${b.color}22 60%, #fff 100%)`,
                  borderColor: b.color,
                }}
              >
                <img src={b.logo} alt={name} className={styles.logo} />
              </div>

              <div className={styles.body}>
                <div className={styles.name} style={{ color: b.color }}>
                  {name}
                </div>
                <div className={styles.desc}>{b.desc}</div>
              </div>

              <div
                className={styles.countBadge}
                style={{ backgroundColor: b.color }}
                aria-hidden="true"
              >
                {typeof b.count === "number" ? b.count : 0}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}