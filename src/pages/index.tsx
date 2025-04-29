import Layout from "@/components/layouts/Layout";
import Index from "@/pages/login";
import PageLeft from "@/pages/finder/left";

export default function Home() {
    return (
        <Layout
            leftContent={<PageLeft/>}
            rightContent={<Index/>}/>
    );
}