export const formAuth = () => {
  let isForm;
  if (typeof window !== "undefined") {
    isForm = JSON.parse(localStorage.getItem("isForm"));
    console.log("isform",isForm)
  }

  if (isForm) {
    return {
      redirect: {
        destination: "/login/form",
        permanent: false,
      },
    };
  }
};
