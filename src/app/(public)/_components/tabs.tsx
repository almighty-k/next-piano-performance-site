import { Tab } from "./tab";

type TabsProps = {
  tabItems: Array<{
    label: string;
    category: string;
  }>;
};

export function Tabs({ tabItems }: TabsProps) {
  return (
    <div className="inline-flex border-b border-white/50 text-white">
      {tabItems.map((tabItem) => (
        <Tab key={tabItem.category} category={tabItem.category}>
          {/* tabItem.labelはサーバー側でレンダリングされる。　 */}
          {/* https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns#supported-pattern-passing-server-components-to-client-components-as-props */}
          {tabItem.label}
        </Tab>
      ))}
    </div>
  );
}
