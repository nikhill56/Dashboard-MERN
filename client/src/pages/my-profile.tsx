import React from "react";
import { useGetIdentity, useOne } from "@pankod/refine-core";
import { Profile } from "components";
import { Typography } from "@pankod/refine-mui";

const MyProfile = () => {
  const { data: user } = useGetIdentity();
  const { data, isLoading, isError } = useOne({
    resource: "users",
    id: user?.userid,
  });

  const myProfile = data?.data ?? [];
  console.log(myProfile);
  if (isLoading) return <Typography>Loading</Typography>;
  if (isError) return <Typography>Error</Typography>;
  return (
    <Profile
      type="My"
      name={myProfile?.name}
      email={myProfile?.email}
      avatar={myProfile?.avatar}
      properties={myProfile?.allProperties}
    />
  );
};

export default MyProfile;
