import Header from "@/components/Header";
import ListItem from "@/components/ListItem";
import { getDictionary } from "@/utils/dictionary";
import { Locale } from "../../../../i18n-config";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { page } = await getDictionary(lang);
  return (
    <div className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
      <Header lang={page.header}>
        <div className="mb-2">
          <h1 className="text-white text-3xl font-semibold">{page.home.title}</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 mt-4">
            <ListItem
              image="/images/liked.png"
              name={page.home.liked}
              href="liked"
            />
          </div>
        </div>
      </Header>
      <div className="mt-2 mb-7 px-6">
        <div className="flex justify-between items-center">
          <h1 className="text-white text-2xl font-semibold">{page.home.category}</h1>
        </div>
        <div>{page.home.songs}</div>
      </div>
    </div>
  );
}
