import styled from '@emotion/styled';

export const Container = styled.div`
  margin: 50px auto 20px auto;
  width: 500px;
  height: auto;
  padding: 20px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 5%;
`;

export const Phonebook = styled.h1`
  margin-bottom: 16px;
  font-weight: 500;
  font-size: 30px;
  line-height: 1.18;
  text-align: center;
  color: #979595;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 5px 10px;

  font-weight: 400;
  font-size: 16px;
  line-height: 1.33;
  color: white;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  padding: 5px 10px;
`;

export const Button = styled.button`
  display: block;
  margin: 0 auto;
  padding: 8px;
  font-size: 12px;
  color: #e0dede;
  min-width: 100px;
  border: 1px solid gray;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.5);
  text-shadow: 0 0 5px #000;
`;

export const Contacts = styled.h2`
  margin-top: 20px;
  margin-bottom: 16px;
  font-weight: 500;
  font-size: 30px;
  line-height: 1.18;
  text-align: center;
  color: #979595;
`;

export const FilterStyled = styled.label`
  color: #979595;
`;

export const ContactListStyled = styled.ul`
  justify-content: center;
  align-items: center;
  padding: 10px 0;
`;

export const ContactItemStyled = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 5px 10px;
  border-radius: 5%;
  border: 1px solid gray;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.33;
  color: white;
`;

export const DeleteBtn = styled.button`
  display: block;
  padding: 8px;
  font-size: 12px;
  color: #e0dede;
  width: 60px;
  border: 1px solid gray;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.5);
  text-shadow: 0 0 5px #000;
`;

// export const Label = styled.span`
//   font-weight: 400;
//   font-size: 12px;
//   line-height: 1.18;
//   text-align: center;
//   color: var(--color-secondary-text);
// `;

// export const Percentage = styled.span`
//   font-weight: 500;
//   font-size: 16px;
//   line-height: 1.18;
// `;
