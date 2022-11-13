function NotFound() {
  return (
    <section className="h-screen flex items-center  p-16 bg-gray-900 text-fontSub">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl ">
            <span className="sr-only">Error</span>404
          </h2>
          <p className="text-2xl mb-8 mt-4 font-semibold md:text-3xl">존재하지 않는 페이지 입니다.</p>
          <a
            rel="noopener noreferrer"
            href="##"
            className="px-8 py-3 mt-20 font-semibold rounded bg-primary hover:bg-slate-500 text-white">
            메인 페이지로 이동
          </a>
        </div>
      </div>
    </section>
  );
}

export default NotFound;
