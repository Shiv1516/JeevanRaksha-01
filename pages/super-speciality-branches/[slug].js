// pages/services/branch/[slug].js
import { useRouter } from 'next/router';
import navigationData from '../../data/navigationData.json';

const BranchPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  // Find the branch based on the dynamic slug
  const branch = navigationData.speciality.branches.find((b) => b.slug === slug);

  return (
    <div>
      <h1>Branch Page</h1>
      {/* Use the data from navigationData */}
      {branch && (
        <div>
          <p>Branch Name: {branch.name}</p>
          {/* Add more content based on your requirements */}
        </div>
      )}
    </div>
  );
};

export default BranchPage;
