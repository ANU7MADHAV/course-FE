import AdminDashboard from "../../components/instructor/AdminDashboard";
import CourseCard from "../../components/instructor/CourseCard";

const AdminDashboardPage = () => {
  return (
    <div>
      <AdminDashboard />
      <main>
        <CourseCard />
      </main>
    </div>
  );
};

export default AdminDashboardPage;
