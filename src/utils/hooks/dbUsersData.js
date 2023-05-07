import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import {
  deleteRequest,
  getRequest,
  patchRequest,
  postRequest,
  putRequest,
} from "../apiCalls";
import { generateNumbers, queryKeyUpdater, toastObject } from "../helper";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const dbUsersData = () => {
  const { isLoading, isError, data } = useQuery(["allUsers"], () =>
    axios.get("http://localhost:3001/users").then((res) => res.data)
  );
  // console.log(data);
  return { isLoading, isError, data };
};

export const getUsersData = (userNumber) => {
  const { isLoading, isError, data } = useQuery(["allUsers"], () =>
    getRequest({ url: `http://localhost:3001/users/${userNumber}` })
  );
  // console.log(data);
  return { isLoading, isError, data };
};

// export const updateUsersData = (userNumber) => {
//   const { isLoading, isError, data } = useQuery(["user"], () =>
//     patchRequest({ url: `http://localhost:3001/users/${userNumber}` })
//   );
//   return { isLoading, isError, data };
// };

export const postMutation = (queryName) => {
  const navigate = useNavigate();
  const queryFuncName = queryKeyUpdater(queryName);
  const queryClient = useQueryClient();
  const {
    data: userData,
    mutate,
    isLoading: userLoading,
    isError,
  } = useMutation(postRequest, {
    async onSuccess(response) {
      if (response?.statusText === "Created") {
        toast.success(generateNumbers());
        navigate("/profile");
      }
      await queryClient.invalidateQueries(
        queryFuncName,
        { exact: true },
        { throwOnError: true }
      );
    },
    onError(error) {
      console.log(error);
    },
  });
  return { userData, mutate, userLoading };
};

export const patchMutation = (queryName) => {
  const navigate = useNavigate();
  const queryFuncName = queryKeyUpdater(queryName);
  const queryClient = useQueryClient();
  const {
    data: patchUserData,
    mutate,
    isLoading: patchUserLoading,
    isError,
  } = useMutation(patchRequest, {
    async onSuccess(response) {
      if (response) {
        toast.success("succesful", toastObject());
        // console.log(response, "111111111111111111");
      }
      await queryClient.invalidateQueries(
        queryFuncName,
        { exact: true },
        { throwOnError: true }
      );
    },
    onError(error) {
      console.log(error);
    },
  });
  return { patchUserData, mutate, patchUserLoading };
};

export const deleteMutation = (queryName) => {
  const queryFuncName = queryKeyUpdater(queryName);

  const queryClient = useQueryClient();
  const {
    data: userData,
    mutate,
    isLoading: deleteLoading,
    isError,
  } = useMutation(deleteRequest, {
    async onSuccess(response) {
      console.log(response);
      await queryClient.invalidateQueries(
        queryFuncName,
        { exact: true },
        { throwOnError: true }
      );
    },
    onError(error) {
      console.log(error);
    },
  });
  return { userData, mutate, deleteLoading };
};

export const authMutation = () => {
  const {
    data: authData,
    mutate,
    isLoading: authLoading,
    isError,
  } = useMutation(postRequest, {
    onSuccess(response) {
      // mailerSender();
      console.log(response);
    },
    onError(error) {
      console.log(error);
    },
  });
  return { authData, mutate, authLoading };
};

export const updateMutation = (queryName) => {
  const queryFuncName = queryKeyUpdater(queryName);

  const queryClient = useQueryClient();
  const {
    data: userData,
    mutate,
    isLoading: deleteLoading,
    isError,
  } = useMutation(deleteRequest, {
    async onSuccess(response) {
      console.log(response);
      await queryClient.invalidateQueries(
        queryFuncName,
        { exact: true },
        { throwOnError: true }
      );
    },
    onError(error) {
      console.log(error);
    },
  });
  return { userData, mutate, deleteLoading };
};

// export const patchMutation = (queryName) => {
//   const queryFuncName = queryKeyUpdater(queryName);

//   const queryClient = useQueryClient();
//   const {
//     data: updateUserData,
//     mutate,
//     isLoading: updateLoading,
//     isError,
//   } = useMutation(patchRequest, {
//     async onSuccess(response) {
//       console.log(response);
//       await queryClient.invalidateQueries(
//         queryFuncName,
//         { exact: true },
//         { throwOnError: true }
//       );
//     },
//     onError(error) {
//       console.log(error);
//     },
//   });
//   return { updateUserData, mutate, updateLoading };
// };

export const signupMutation = (queryName) => {
  const navigate = useNavigate();
  const queryFuncName = queryKeyUpdater(queryName);
  const queryClient = useQueryClient();
  const {
    data: newUserData,
    mutate,
    isLoading: newUserLoading,
    isError,
  } = useMutation(postRequest, {
    async onSuccess(response) {
      if (response?.statusText === "Created") {
        toast.success(
          "account created successfuly, Please login!",
          toastObject()
        );
        navigate("/login");
      }
      await queryClient.invalidateQueries(
        queryFuncName,
        { exact: true },
        { throwOnError: true }
      );
    },
    onError(error) {
      console.log(error);
    },
  });
  return { newUserData, mutate, newUserLoading };
};

export const loginMutation = (queryName) => {
  const queryFuncName = queryKeyUpdater(queryName);
  const queryClient = useQueryClient();
  const {
    data: userData,
    mutate,
    isLoading: userLoading,
    isError,
  } = useMutation(postRequest, {
    async onSuccess(response) {
      if (response) {
        console.log("success ===++++++");
      }
      await queryClient.invalidateQueries(
        queryFuncName,
        { exact: true },
        { throwOnError: true }
      );
    },
    onError(error) {
      console.log(error);
    },
  });
  return { userData, mutate, userLoading };
};
