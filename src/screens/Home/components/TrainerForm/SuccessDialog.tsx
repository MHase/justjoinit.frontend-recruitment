import { Button, Dialog, DialogProps, Stack, Typography, paperClasses } from '@mui/material';

type SuccessDialogProps = DialogProps & {
  onProceed: () => void;
};

export const SuccessDialog = ({ onProceed, ...props }: SuccessDialogProps) => (
  <Dialog
    data-testid='trainer-form-dialog'
    sx={{
      mx: 'auto',
      // could use maxWidth prop but not for custom value
      maxWidth: 380,
      [`& .${paperClasses.root}`]: {
        width: '100%',
      },
    }}
    {...props}
  >
    <Stack p={3.2} textAlign='center' spacing={3.2} alignItems='center'>
      <Typography variant='headline'>Success</Typography>
      <Button onClick={() => onProceed()}>Reset form</Button>
    </Stack>
  </Dialog>
);
