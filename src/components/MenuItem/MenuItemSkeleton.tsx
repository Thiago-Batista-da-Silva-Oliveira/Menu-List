import Skeleton from "react-loading-skeleton";

export const MenuItemSkeleton = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{
          background: "#eaeaea",
          display: "flex",
          flexDirection: "column",
          width: "220px",
          height: "200px",
          borderRadius: '8px'
        }}
      >
        <Skeleton height={"100%"} width={"100%"} />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            background: "#eaeaea",
            marginTop: "-30px",
            display: "flex",
            flexDirection: "column",
            width: "100px",
            height: "50px",
            borderRadius: "12px",
          }}
        >
          <Skeleton height={"100%"} width={"100%"} />
        </div>
      </div>
      <div
        style={{
          background: "#eaeaea",
          marginTop: "15px",
          display: "flex",
          flexDirection: "column",
          width: "220px",
          height: "10px",
        }}
      >
        <Skeleton height={"100%"} width={"100%"} />
      </div>
      <div
        style={{
          background: "#eaeaea",
          marginTop: "15px",
          display: "flex",
          flexDirection: "column",
          width: "220px",
          height: "10px",
          margin: '10px 0px'
        }}
      >
        <Skeleton height={"100%"} width={"100%"} />
      </div>
    </div>
  );
};
