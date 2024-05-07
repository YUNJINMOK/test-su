import Layout from "../components/Layout";
import GrayStamp from "../assets/stampGray.svg";
import "../style/stamp.css";

export default function StampPage() {
  return (
    <Layout>
      <div className="stamp-section">
        {/* 드롭다운 */}
        <div class="hs-dropdown relative inline-flex">
          <button
            id="hs-dropdown-default"
            type="button"
            class="hs-dropdown-toggle py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
          >
            Actions
            <svg
              class="hs-dropdown-open:rotate-180 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>

          <div
            class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-60 bg-white shadow-md rounded-lg p-2 mt-2 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full"
            aria-labelledby="hs-dropdown-default"
          >
            <a
              class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
              href="#"
            >
              Newsletter
            </a>
            <a
              class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
              href="#"
            >
              Purchases
            </a>
            <a
              class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
              href="#"
            >
              Downloads
            </a>
            <a
              class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
              href="#"
            >
              Team Account
            </a>
          </div>
        </div>
        {/* 스탬프 */}
        <div className="stamp-box">
          <p>
            <img src={GrayStamp} alt="stamp" />
          </p>
          <p>
            <img src={GrayStamp} alt="stamp" />
          </p>
          <p>
            <img src={GrayStamp} alt="stamp" />
          </p>
          <p>
            <img src={GrayStamp} alt="stamp" />
          </p>
          <p>
            <img src={GrayStamp} alt="stamp" />
          </p>
          <p>
            <img src={GrayStamp} alt="stamp" />
          </p>
        </div>
      </div>
    </Layout>
  );
}
