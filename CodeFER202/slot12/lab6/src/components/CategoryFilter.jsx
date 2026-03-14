import { Card, Form } from "react-bootstrap";

function CategoryFilter({ categoryFilter, setCategoryFilter }) {

  const handleChange = (e) => {
    setCategoryFilter(e.target.value);
  };

  return (
    <Card className="filter-card">
      <Card.Body>

        <h5 className="filter-title">Filter</h5>

        <Form.Select
          value={categoryFilter}
          onChange={handleChange}
        >
          <option value="All">All categories</option>
          <option value="Food">Food</option>
          <option value="Utilities">Utilities</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Mua sắm">Mua sắm</option>
        </Form.Select>

      </Card.Body>
    </Card>
  );
}

export default CategoryFilter;