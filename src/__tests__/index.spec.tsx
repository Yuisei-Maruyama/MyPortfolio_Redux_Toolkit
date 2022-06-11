import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from '@/store/store'
import Home from '../pages/index'
import '@testing-library/jest-dom'
import { Step } from '@/@types/types'

const dummyStepsProps: Step[] = [
  {
    name: 'test1',
    activeStep: 2,
    steps: ['step1', 'step2'],
    id: '1',
    genre: 'FrontEnd',
  },
  {
    name: 'test2',
    activeStep: 2,
    steps: ['step1', 'step2'],
    id: '2',
    genre: 'BackEnd',
  },
]
describe('Homeコンポーネント', () => {
  beforeEach(() => {
    // 対象のコンポーネントを指定し、ダミーのpropsを渡してコンポーネントをレンダーする
    // reduxのProviderでwrapする必要がある
    render(
      <Provider store={store}>
        <Home steps={dummyStepsProps} />
      </Provider>
    )
  })
  it('Homeコンポーネントのレンダリング確認', () => {
    // screemでアクセスする
    screen.debug()
  })
})
