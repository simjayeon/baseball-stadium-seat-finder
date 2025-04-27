import Layout from "@/components/layouts/Layout";
import PageLogin from "@/pages/login/PageLogin";

export default function Home() {
    return (
        <Layout
            rightContent={<PageLogin/>}/>
    );
}