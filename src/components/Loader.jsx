var Loader = function() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {[1,2,3,4,5,6,7,8].map(function(_, i) {
        return (
          <div key={i} className={"rounded-2xl overflow-hidden glass-card animate-fade-in-up stagger-" + (i + 1)}>
            <div className="h-60 skeleton"></div>
            <div className="p-5 space-y-3">
              <div className="h-3 skeleton w-16"></div>
              <div className="h-4 skeleton w-full"></div>
              <div className="h-3 skeleton w-4/5"></div>
              <div className="h-3 skeleton w-3/5"></div>
              <div className="flex justify-between items-center pt-3">
                <div className="h-7 skeleton w-20"></div>
                <div className="h-10 skeleton w-28 rounded-xl"></div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Loader
