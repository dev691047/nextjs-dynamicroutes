import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const details = [
  { id: 1, name: "Yash", role: "Senior Developer" },

  { id: 2, name: "Vaibhav", role: "Backend Developer" },

  { id: 3, name: "Suresh", role: "Frontend Developer" },
];
const userInfo = () => {
  const router = useRouter();
  const Id = router.query.user;

  const [searchQuery, setSearchQuery] = useState(null);
  const [index, setIndex] = useState(null);
  useEffect(() => {
    console.log(`useEffect triggered`);
    if (router.isReady) {
      setSearchQuery(Id);
      setIndex(details.filter((v) => v.id === Number(Id)));
    }
  }, [Id]);

  return (
    <div>
      {index && (
        <div>
          {index[0].name},{index[0].role}
        </div>
      )}
    </div>
  );
};

export default userInfo;
