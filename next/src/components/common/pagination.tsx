"use client";

import styles from "./pagination.module.scss";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import IcoArrow from "@/components/svgs/icoArrow";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["900"] });

const removePageFromPathname = (pathname: string) => {
  return pathname.replace(/\/page\/\d+$/, "");
};

const Pagination = ({
  page = 1,
  total = 1,
}: {
  page?: number;
  total?: number;
}) => {
  const pathname = usePathname();

  const createHref = (createPage: number) => {
    const basePath = removePageFromPathname(pathname);
    if (createPage === 1) {
      return basePath;
    }
    return `${basePath}/page/${createPage}`;
  };

  const createPageLinks = () => {
    const pageLinks = [];
    const delta = 2; // 現在のページの前後に表示するページの数

    const startPage = Math.max(1, page - delta);
    const endPage = Math.min(total, page + delta);

    if (startPage > 1) {
      pageLinks.push(
        <Link key={1} href={createHref(1)}>
          <span className={styles.pageItem}>1</span>
        </Link>
      );
      if (startPage > 2) {
        pageLinks.push(
          <span key="start-ellipsis" className={styles.ellipsis}>
            …
          </span>
        );
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pageLinks.push(
        <Link key={i} href={createHref(i)}>
          <span
            className={`${styles.pageItem} ${
              page === i ? styles.isCurrent : ""
            }`}
          >
            {i}
          </span>
        </Link>
      );
    }

    if (endPage < total) {
      if (endPage < total - 1) {
        pageLinks.push(
          <span key="end-ellipsis" className={styles.ellipsis}>
            …
          </span>
        );
      }
      pageLinks.push(
        <Link key={total} href={createHref(total)}>
          <span className={styles.pageItem}>{total}</span>
        </Link>
      );
    }

    return pageLinks;
  };

  return (
    <div className={`${styles.pagination} ${montserrat.className}`}>
      {page > 1 && (
        <Link href={createHref(page - 1)}>
          <span className={styles.pageItem}>
            <IcoArrow direction="left" />
          </span>
        </Link>
      )}
      {createPageLinks()}
      {page < total && (
        <Link href={createHref(page + 1)}>
          <span className={styles.pageItem}>
            <IcoArrow direction="right" />
          </span>
        </Link>
      )}
    </div>
  );
};

export default Pagination;
