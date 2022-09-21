const ErrorAlert = ({ error }) => {
  return (
    <div className="bg-red-700 pt-1 pb-2 text-sm w-60 mx-auto  rounded-b-xl text-center">
      {error}
    </div>
  );
};

export default ErrorAlert;
