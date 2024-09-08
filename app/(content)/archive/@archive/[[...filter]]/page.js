import Link from "next/link";
import React, { Suspense } from "react";

import NewsList from "@/components/news-list";
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/lib/news";

const FilteredNewsPage = async ({ year, month }) => {
  let news;

  if (year && !month) {
    news = await getNewsForYear(year);
  } else if (year && month) {
    news = await getNewsForYearAndMonth(year, month);
  }

  let newsContent = <p>No news found for the selected period.</p>;

  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  }

  return newsContent;
};

const FilterHeader = async ({ year, month }) => {
  const getAvailableYears = await getAvailableNewsYears();

  let links = getAvailableYears;

  if (year && !month) {
    links = getAvailableNewsMonths(year);
  }
  if (year && month) {
    links = [];
  }

  if (year && !getAvailableYears.includes(year)) {
    throw new Error("Invalid year.");
  }

  if (year && month && !getAvailableNewsMonths(year).includes(month)) {
    throw new Error("Invalid month.");
  }

  return (
    <header id="archive-header">
      <nav>
        <ul>
          {links.map((link) => {
            const href = year ? `/archive/${year}/${link}` : `/archive/${link}`;
            return (
              <li key={link}>
                <Link href={href}>{link}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

const Page = async ({ params }) => {
  const filter = params.filter;

  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];

  return (
    <>
      {/* <Suspense fallback={<p>Loading filter...</p>}>
      </Suspense> */}
      <Suspense fallback={<p>Loading...</p>}>
        <FilterHeader year={selectedYear} month={selectedMonth} />
        <FilteredNewsPage year={selectedYear} month={selectedMonth} />
      </Suspense>
    </>
  );
};

export default Page;
