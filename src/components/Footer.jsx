function Footer() {
  return (
    <footer
  id="footer"
  className="bg-[#0B6E4F] text-white"
>

      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12">

        <div>

          <h2 className="text-3xl font-bold">
            CGSA
          </h2>

          <p className="mt-5 text-green-100 leading-8">
            Centre of Gandhian Studies & Action
            <br />
            Menon College
          </p>

        </div>

        <div>

          <h3 className="text-xl font-semibold mb-5">
            Quick Links
          </h3>

          <ul className="space-y-3">

            <li>Home</li>

            <li>About</li>

            <li>Articles</li>

            <li>Contribute</li>

            <li>Contact</li>

          </ul>

        </div>

        <div>

          <h3 className="text-xl font-semibold mb-5">
            Contact
          </h3>

          <p>Email: cgsa@menoncollege.edu</p>

          <p className="mt-3">
            Phone: +91 XXXXX XXXXX
          </p>

          <p className="mt-3">
            Mumbai, Maharashtra
          </p>

        </div>

      </div>

      <div className="border-t border-green-700 py-6 text-center text-green-100">

        © 2026 Centre of Gandhian Studies & Action

      </div>

    </footer>
  );
}

export default Footer;