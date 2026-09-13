const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-white">

      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-10">

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-2">

            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-purple-500 to-pink-500 text-[10px] font-bold text-white">
                DS
              </div>

              <h3 className="text-sm font-bold text-slate-900">
                Dev <span className="text-pink-500">Stack</span>
              </h3>
            </div>

            <p className="mt-3 max-w-sm text-[10px] leading-5 text-slate-400">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

            {/* Social Links */}
            <div className="mt-4 flex gap-4">

              <a
                href="#"
                className="text-[9px] font-medium text-slate-500 hover:text-pink-500"
              >
                GitHub
              </a>

              <a
                href="#"
                className="text-[9px] font-medium text-slate-500 hover:text-pink-500"
              >
                Twitter
              </a>

              <a
                href="#"
                className="text-[9px] font-medium text-slate-500 hover:text-pink-500"
              >
                LinkedIn
              </a>

            </div>

          </div>

          {/* Product */}
          <div>

            <h4 className="text-[9px] font-bold uppercase tracking-wider text-slate-900">
              Product
            </h4>

            <div className="mt-3 flex flex-col gap-2">

              <a
                href="#home"
                className="text-[9px] text-slate-400 hover:text-pink-500"
              >
                Home
              </a>

              <a
                href="#technologies"
                className="text-[9px] text-slate-400 hover:text-pink-500"
              >
                Technologies
              </a>

              <a
                href="#projects"
                className="text-[9px] text-slate-400 hover:text-pink-500"
              >
                Projects
              </a>

            </div>

          </div>

          {/* Company */}
          <div>

            <h4 className="text-[9px] font-bold uppercase tracking-wider text-slate-900">
              Company
            </h4>

            <div className="mt-3 flex flex-col gap-2">

              <a
                href="#about"
                className="text-[9px] text-slate-400 hover:text-pink-500"
              >
                About
              </a>

              <a
                href="#contact"
                className="text-[9px] text-slate-400 hover:text-pink-500"
              >
                Contact
              </a>

              <a
                href="#"
                className="text-[9px] text-slate-400 hover:text-pink-500"
              >
                Careers
              </a>

            </div>

          </div>

          {/* Legal */}
          <div>

            <h4 className="text-[9px] font-bold uppercase tracking-wider text-slate-900">
              Legal
            </h4>

            <div className="mt-3 flex flex-col gap-2">

              <a
                href="#"
                className="text-[9px] text-slate-400 hover:text-pink-500"
              >
                Privacy Policy
              </a>

              <a
                href="#"
                className="text-[9px] text-slate-400 hover:text-pink-500"
              >
                Terms of Service
              </a>

            </div>

          </div>

        </div>

        {/* Bottom */}
        <div className="mt-8 flex flex-col gap-2 border-t border-slate-100 pt-4 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-[9px] text-slate-400">
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex gap-3">
            <a
              href="#"
              className="text-[9px] text-slate-400 hover:text-pink-500"
            >
              Privacy
            </a>

            <a
              href="#"
              className="text-[9px] text-slate-400 hover:text-pink-500"
            >
              Terms
            </a>
          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;