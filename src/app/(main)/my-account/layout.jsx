import Breadcumb from "@/components/shared/Breadcumb";
import Sidebar from "./_components/Sidebar";

const layout = ({ children }) => {
  return (
    <main>
      <Breadcumb title="Dashboard" pathnames={["Home", "My Account"]} />
      <div className="container">
        <div className="flex flex-col md:flex-row gap-10 py-20">
          <Sidebar />
          <div className="account-content">{children}</div>
        </div>
      </div>
    </main>
  );
};

export default layout;
