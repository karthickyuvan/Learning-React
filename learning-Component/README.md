Create Components in VS Code

Step 1: Open VS Code & Create React App
npx create-react-app my-app
cd my-app
code .
npm start

Step 2: Create a New Component File
Inside your project:
Go to src/
Right click → New Folder → name it components
Inside components/ → New File → Header.jsx,Footer.jsx,Content.jsx

Step 3: Write Your Functional Component
// src/components/Header.jsx
function Header() {
  return (
    <div>
      <h1>This is the Header Component</h1>
    </div>
  );
}

export default Header;
🔚 export default Header; → Important! So we can use it in App.jsx.

Step 4: Use That Component in App.js
Go to src/App.js and import the component.
import Header from './components/Header'; // import pannanum

function App() {
  return (
    <div>
      <Header /> {/* Custom tag like HTML tag */}
      <p>This is App Component</p>
    </div>
  );
}

export default App;

Step 5: Start the App
npm start

Step 6: Add Multiple Components
// src/components/Footer.jsx
function Footer() {
  return <p>© 2025 VJ Kudos</p>;
}

export default Footer;

Then import and use it in App.jsx

import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <p>This is App Component</p>
      <Footer />
    </div>
  );
}
