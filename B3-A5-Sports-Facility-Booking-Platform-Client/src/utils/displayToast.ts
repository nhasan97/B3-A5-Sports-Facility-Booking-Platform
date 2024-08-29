import { ToastMethod } from "@/types/global.type";
import { toast } from "sonner";

const toastMethods: Record<string, ToastMethod> = {
  loading: toast.loading,
  success: toast.success,
  error: toast.error,
  info: toast.info,
};

const displayToast = (state: string, msg: string) => {
  const toastMethod = toastMethods[state];

  if (toastMethod) {
    toastMethod(msg, { duration: 2000 });
  } else {
    console.error(`Toast state "${state}" is not recognized.`);
  }
};

export default displayToast;
