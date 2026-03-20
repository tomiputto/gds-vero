import { Box, Button, FileUpload, Heading, VStack } from "@chakra-ui/react";
import { UploadIcon } from "@gdesignsystem/icons";
import { Section } from "../../components/Section";
import { AccessibilityGuidance } from "../../components/AccessibilityGuidance";
import { GDSText as Text } from "@gdesignsystem/react";
export function FileUploadPage() {
  return (
    <VStack align="stretch" gap="10">
      <Box>
        <Heading size="3xl" mb="2">
          File Upload
        </Heading>
        <Text color="fg.muted">
          Input for selecting and uploading files.
        </Text>
      </Box>

      <Section
        title="Basic"
        description="Trigger button and file list"
        code={`import { Button, FileUpload } from "@chakra-ui/react";

<FileUpload.Root>
  <FileUpload.HiddenInput />
  <FileUpload.Trigger asChild>
    <Button variant="outline" size="sm" colorPalette="brand">Upload file</Button>
  </FileUpload.Trigger>
  <FileUpload.List />
</FileUpload.Root>`}
      >
        <FileUpload.Root>
          <FileUpload.HiddenInput />
          <FileUpload.Trigger asChild>
            <Button variant="outline" size="sm" colorPalette="brand">
              <UploadIcon /> Upload file
            </Button>
          </FileUpload.Trigger>
          <FileUpload.List />
        </FileUpload.Root>
      </Section>

      <Section
        title="With dropzone"
        description="Drag and drop area"
        code={`<FileUpload.Root maxW="xl" maxFiles={10}>
  <FileUpload.HiddenInput />
  <FileUpload.Dropzone>
    <FileUpload.DropzoneContent>
      <Box>Drag and drop files here</Box>
      <Box color="fg.muted">.png, .jpg up to 5MB</Box>
    </FileUpload.DropzoneContent>
  </FileUpload.Dropzone>
  <FileUpload.List />
</FileUpload.Root>`}
      >
        <FileUpload.Root maxW="xl" maxFiles={10} alignItems="stretch">
          <FileUpload.HiddenInput />
          <FileUpload.Dropzone>
            <FileUpload.DropzoneContent>
              <Box mb="2"><UploadIcon boxSize="8" color="fg.muted" /></Box>
              <Box>Drag and drop files here</Box>
              <Box color="fg.muted">.png, .jpg up to 5MB</Box>
            </FileUpload.DropzoneContent>
          </FileUpload.Dropzone>
          <FileUpload.List />
        </FileUpload.Root>
      </Section>

      <AccessibilityGuidance
        items={[
          { text: "Ensure the dropzone/trigger has an accessible name and is keyboard focusable.", rule: "4.1.2" },
          { text: "Announce file count and size limits; expose errors for invalid files.", rule: "3.3.1" },
        ]}
      />
    </VStack>
  );
}