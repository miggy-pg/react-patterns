import { useState } from "react";
import { faker } from "@faker-js/faker";
import "./styles.css";
import withToggles from "./HOC";

const products = Array.from({ length: 20 }, () => {
  return {
    productName: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: faker.commerce.price(),
  };
});

const companies = Array.from({ length: 15 }, () => {
  return {
    companyName: faker.company.name(),
    phrase: faker.company.catchPhrase(),
  };
});

function ProductItem({ product }) {
  return (
    <li className="product">
      <p className="product-name">{product.productName}</p>
      <p className="product-price">${product.price}</p>
      <p className="product-description">{product.description}</p>
    </li>
  );
}

function CompanyItem({ company, defaultVisibility }) {
  const [isVisible, setIsVisisble] = useState(defaultVisibility);

  return (
    <li
      className="company"
      onMouseEnter={() => setIsVisisble(true)}
      onMouseLeave={() => setIsVisisble(false)}
    >
      <p className="company-name">{company.companyName}</p>
      {isVisible && (
        <p className="company-phrase">
          <strong>About:</strong> {company.phrase}
        </p>
      )}
    </li>
  );
}

// OBJECTIVE: Use react patterns to add 2 toggle functionalities to the List component
// We are using the render function pattern here so that we can have the flexibility to
//  render different types of items with the same component
function List({ title, items, render }) {
  const [isOpen, setIsOpen] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const displayItems = isCollapsed ? items.slice(0, 3) : items;

  function toggleOpen() {
    setIsOpen((isOpen) => !isOpen);
    setIsCollapsed(false);
  }

  return (
    <div className="list-container">
      <div className="heading">
        <h2>{title}</h2>
        <button onClick={toggleOpen}>
          {isOpen ? <span>&or;</span> : <span>&and;</span>}
        </button>
      </div>
      {isOpen && <ul className="list">{displayItems.map(render)}</ul>}

      <button onClick={() => setIsCollapsed((isCollapsed) => !isCollapsed)}>
        {isCollapsed ? `Show all ${items.length}` : "Show less"}
      </button>
    </div>
  );
}

export default function ReactPattern() {
  // ------------- START Higher Order Component LESSON -------------
  const ProductListWithToggles = withToggles(ProductList);

  return (
    <div className="col-2">
      <ProductList title="Products HOC" items={products} />
      <ProductListWithToggles title="Products HOC" items={products} />
    </div>
  );
  // ------------- END Higher Order Component LESSON -------------

  //------------- START React Pattern LESSON -------------
  // return (
  //   <div>
  //     <h1>Render Props Demo</h1>
  //     {/* We should use a callback function in the 'render' prop so that
  //     the 'render' function will know what to return */}
  //     <div className="col-2">
  //       <List
  //         title="Products"
  //         items={products}
  //         render={(product) => (
  //           <ProductItem key={product.productName} product={product} />
  //         )}
  //       />
  //       <List
  //         title="Companies"
  //         items={companies}
  //         render={(company) => (
  //           <CompanyItem key={company.companyName} company={company} />
  //         )}
  //       />
  //     </div>
  //   </div>
  // );
  // ------------- END React Pattern LESSON -------------
}

// LESSON: How Higher Order Component Works
// - a function that takes a component as an argument and returns a new component that is better

// LATER: Let's say we got this component from a 3rd-party library, and can't change it.
// But we still want to add the 2 toggle functionalities to it
function ProductList({ title, items }) {
  return (
    <ul className="list">
      {items.map((product) => (
        <ProductItem key={product.productName} product={product} />
      ))}
    </ul>
  );
}
