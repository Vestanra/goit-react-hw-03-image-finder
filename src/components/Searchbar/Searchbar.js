import { Header, Input, Form, ButtonIcon, Icon } from "./Searchbar.styled";
import PropTypes from 'prop-types';

export const Searchbar = ({onSubmit, loading}) => {
    return (
      <Header>
        <Form onSubmit={(evt)=>onSubmit(evt)}>
          <Input name="query" type="text" placeholder="Search images and fotos" />
          <ButtonIcon type="submit" disabled={loading}><Icon /></ButtonIcon>
        </Form>
      </Header>
    )
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
}