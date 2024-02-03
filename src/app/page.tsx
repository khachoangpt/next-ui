import { Checkbox } from '@/components/checkbox'
import { CheckboxGroup } from '@/components/checkbox-group'

export default function Home() {
  return (
    <main>
      <CheckboxGroup
        label="Select cities"
        defaultValue={['buenos-aires', 'london']}
      >
        <Checkbox value="buenos-aires">Buenos Aires</Checkbox>
        <Checkbox value="sydney">Sydney</Checkbox>
        <Checkbox value="san-francisco">San Francisco</Checkbox>
        <Checkbox value="london">London</Checkbox>
        <Checkbox value="tokyo">Tokyo</Checkbox>
      </CheckboxGroup>
    </main>
  )
}
