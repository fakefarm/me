# Application Policy Spec

Using RSpec, you can test your application is doing what it is supposed to do.

```
require 'rails_helper'

RSpec.describe ApplicationPolicy, type: :policy do
  subject { described_class.new(user, record) }
  let(:user) { nil }
  let(:record) { nil }

  it { is_expected.to be_a(ApplicationPolicy) }

  describe '#index?' do
    it 'returns false' do
      expect(subject.index?).to eq(false)
    end
  end

  describe '#show?' do
    it 'returns false' do
      expect(subject.show?).to eq(false)
    end
  end

  describe '#create?' do
    it 'returns false' do
      expect(subject.create?).to eq(false)
    end
  end

  describe '#update?' do
    it 'returns false' do
      expect(subject.update?).to eq(false)
    end
  end

  describe '#destroy?' do
    it 'returns false' do
      expect(subject.destroy?).to eq(false)
    end
  end
end
```
