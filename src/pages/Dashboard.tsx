import React from "react";
import "../styles/dashboard.scss";


const Dashboard: React.FC = () => {
  return (
    <main className="vh-100">
      <section className="py-lg-7 py-5 bg-light-subtle min-vh-100">
        <div className="container pb-10">
          <div className="row">
            {/* Sidebar */}
            <div className="col-lg-3 col-md-4">
              <div className="d-md-none text-center d-grid">
                <button
                  className="btn btn-light mb-3 d-flex align-items-center justify-content-between"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseMenu"
                  aria-expanded="false"
                  aria-controls="collapseMenu"
                >
                  Account Menu
                  <i className="bi bi-chevron-down ms-2"></i>
                </button>
              </div>
              <div className="collapse d-md-block" id="collapseMenu">
                <ul className="nav flex-column nav-account">
                  <li className="nav-item">
                    <a href="#" className="nav-link active">
                      <i className="bi bi-pie-chart-fill"></i>
                      <span className="ms-2">Dashboard</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="bi bi-box"></i>
                      <span className="ms-2">Credit Packages</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="bi bi-pencil-square"></i>
                      <span className="ms-2">Signer Management</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="bi bi-rocket-takeoff"></i>
                      <span className="ms-2">Try RNG!</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="bi bi-ticket"></i>
                      <span className="ms-2">Raffle</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      target="_blank"
                      rel="noreferrer"
                      href="/demo"
                    >
                      <i className="bi bi-joystick"></i>
                      <span className="ms-2">JanKenGo Demo</span>
                    </a>
                  </li>
                  <li className="nav-item mt-2">
                    <button
                      className="wallet-adapter-button wallet-adapter-button-trigger"
                      tabIndex={0}
                      type="button"
                      style={{ width: "100%" }}
                    >
                      <i className="wallet-adapter-button-start-icon">
                        <img
                          src="https://firebasestorage.googleapis.com/v0/b/feed-protocol.firebasestorage.app/o/solana.png?alt=media&token=8b1073ab-8459-46e4-891f-2d185890c91e"
                          alt="Backpack icon"
                          style={{
                            color: "transparent",
                            borderRadius: "50%",
                            width: "20px",
                          }}
                        />
                      </i>
                      Disconnect
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="col-lg-9 col-md-8">
              <div className="mb-4">
                <span>Hey </span>
                <span className="mb-0 h5">
                  6NLzAyVY2XnwYwavA7v5MBmZ4oszxVmHFvPKS8g2jdQG
                </span>
                , <span>Welcome to Feed Console.</span>
              </div>
              <div className="mb-5">
                <h4 className="mb-1 h3">Dashboard</h4>
                <p className="mb-0 fs-6">
                  Stay on top of your product! Manage your credits, track usage
                  summaries, monitor your remaining balance, and keep
                  everything in check. Your insights and controls are just a
                  click away.
                </p>
              </div>
              <div className="row mb-5 g-4">
                <div className="col-lg-4 col-md-6">
                  <div className="card border-0 shadow-sm">
                    <div className="card-body">
                      <span>$SOL Balance</span>
                      <h3 className="mb-0 mt-4">0.02004001</h3>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="card border-0 shadow-sm">
                    <div className="card-body">
                      <span>Remaining Credits</span>
                      <h3 className="mb-0 mt-4">0</h3>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="card border-0 shadow-sm">
                    <div className="card-body">
                      <span>Used Credits</span>
                      <h3 className="mb-0 mt-4">0</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card border-0 mb-4 shadow-sm">
                <div className="card-body p-lg-5">
                  <div className="row">
                    <div className="col-4">
                      <h4 className="mb-1">Active/Deactive Signers</h4>
                      <div className="px-5 py-7">There is no data yet</div>
                    </div>
                    <div className="col-4">
                      <h4 className="mb-1">Purchased Packages</h4>
                      <div className="px-5 py-7">There is no data yet</div>
                    </div>
                    <div className="col-4">
                      <h4 className="mb-1">Total Signer Credits</h4>
                      <div className="px-5 py-7">There is no data yet</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <button  className="btn btn-primary buy-credits-btn w-100">Buy Credits</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Dashboard;


