import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

function SaveButton() {
  return (
    <Stack gap={2} className="col-md-5 mx-auto">
      <Button variant="secondary">Save</Button>
      <Button variant="outline-secondary">Cancel</Button>
    </Stack>
  );
}

export default SaveButton;