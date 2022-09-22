import React,{ useContext } from "react";
import FormContext from "../../components/context/FormContext";
import Field from "../../components/Form/field";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { getSession } from "next-auth/react";
import schema from "../../components/Form/yupSchema";
import Submitted from "../../components/Form/submitted";
import SidebarBehave from "../../components/utils/sidebarBehave";

export default function Form({ session }) {
  const { isForm } = useContext(FormContext);
  const errorStyle = "text-[0.7rem]  text-red-500";
  const methods = useForm({
    resolver: yupResolver(schema),
    mode: "all",
  });
  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = async (data, e) => {
    e.preventDefault();

    await fetch(`${process.env.NEXT_PUBLIC_URL}/api/UserForm`, {
      method: "POST",
      body: JSON.stringify({
        firstname: data.firstname,
        lastname: data.lastname,
        parentname: data.parentname,
        phonenumber: data.phonenumber,
        city: data.city,
        school: data.school,
        class: data.class,
        slug: session.user.id,
      }),
    });
    await fetch(`${process.env.NEXT_PUBLIC_URL}/api/UserState`, {
      method: "POST",
      body: JSON.stringify({
        unitTest_1: "0",
        unitTest_2: "1",
        unitTest_3: "1",
        finalTest_1: "1",
        slug: session.user.id,
      }),
    });
    await fetch(`${process.env.NEXT_PUBLIC_URL}/api/UserScore`, {
      method: "POST",
      body: JSON.stringify({
        unitTest_1_score: "",
        unitTest_2_score: "",
        unitTest_3_score: "",
        finalTest_1_score: "",
        slug: session.user.id,
      }),
    });
  };

  return (
    <SidebarBehave>
      {/* main page */}
      {isForm ? (
        <Submitted />
      ) : (
        <FormProvider {...methods}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            class='container max-w-2xl mx-auto  md:w-3/4'
          >
            <div class='p-4  border-t-2 border-amber-400 rounded-lg bg-opacity-5 shadow-sm dark:theme-dark'>
              <div class=' md:w-full text-center'>
                {/* <div class='inline-flex items-center space-x-4'>
                  <img
                    alt='profil'
                    src=''
                    class='mx-auto object-cover rounded-full h-16 w-16 '
                  />
                </div> */}
                <span className='text-xl text-skin-base dark:theme-dark'>
                  Please fill the required fields{" "}
                </span>
              </div>
            </div>
            <div className=' flex-auto space-y-1 bg-skin-base dark:bg-gray-800 rounded-lg'>
              <div className='items-center w-full p-4 space-y-1 text-gray-500 md:inline-flex md:space-y-0'>
                <h2 className='max-w-sm mx-auto md:w-1/3 text-skin-muted text-2xl dark:theme-dark'>
                  Account
                </h2>
                <div class='max-w-sm mx-auto space-y-1 md:w-2/3'>
                  <Field
                    type='text'
                    name='firstname'
                    placeholder='First name'
                  />
                  <p className={errorStyle}>{errors.firstname?.message}</p>
                  <Field
                    type='text'
                    name='lastname'
                    placeholder='Last name (optional)'
                  />
                  <p className={errorStyle}>{errors.lastname?.message} </p>
                </div>
              </div>
              <hr />
              <div class='items-center w-full p-4 space-y-1 text-gray-500 md:inline-flex md:space-y-0'>
                <h2 class='max-w-sm mx-auto md:w-1/3 text-skin-muted text-2xl dark:theme-dark'>
                  Personal info
                </h2>
                <div class='max-w-sm mx-auto space-y-1 md:w-2/3'>
                  <Field
                    type='text'
                    name='parentname'
                    placeholder='Father/ Mother/ Guardian'
                  />
                  <p className={errorStyle}>{errors.parentname?.message}</p>

                  <Field
                    type='tel'
                    name='phonenumber'
                    placeholder='Phone number'
                  />
                  <p className={errorStyle}>{errors.phonenumber?.message}</p>
                </div>
              </div>
              <hr className='' />
              <div class='items-center w-full p-8 space-y-1 text-gray-500 md:inline-flex md:space-y-0'>
                <h2 class='max-w-sm mx-auto md:w-1/3 text-skin-muted text-2xl dark:theme-dark'>
                  Education
                </h2>
                <div class='max-w-sm mx-auto space-y-1 md:w-2/3'>
                  <Field type='text' name='city' placeholder='City' />
                  <p className={errorStyle}>{errors.city?.message}</p>

                  <Field type='text' name='school' placeholder='School name' />
                  <p className={errorStyle}>{errors.school?.message}</p>
                  <Field
                    type='text'
                    name='class'
                    placeholder='Class / example : 6th, 7th etc'
                  />
                  <p className={errorStyle}>{errors.class?.message}</p>

                  {/* <SelectBar /> */}
                </div>
              </div>
              <hr />
              <div class='w-full px-4 py-3 ml-auto text-gray-500 md:w-1/3'>
                <button
                  type='submit'
                  class='py-2 px-4  bg-emerald-600 hover:bg-emerald-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg disabled:cursor-not-allowed cursor-pointer'
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </FormProvider>
      )}
    </SidebarBehave>
  );
}
export async function getServerSideProps(context) {
  return {
    props: {
      session: await getSession(context),
    },
  };
}
