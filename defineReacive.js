function remove(arr, item) {
  if (arr.length) {
    const index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

class Dep {
  constructor() {
    this.subs= []
  }

  addSub(sub) {
    this.subs.push(sub)
  }

  removeSub (sub) {
    remove(this.subs, sub)
  }

  depend () {
    if (Dep.target) {
      Dep.target.addDep(this)
    }
  }

  notify () {
    const subs = this.subs.slice()

    for (const i = 0, l = subs.length; i < l; i++) {
      subs[i].update()
    }
  }
}

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key];
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function defineReactive(
  obj,
  key,
  val,
  customSetter, // dev下使用
  shallow = false // 浅观察
) {
  const dep = new Dep()

  const propertyDesc = Object.getOwnPropertyDescriptor(obj, key)
  if (propertyDesc && propertyDesc.configurable === false) {
    return
  }

  const getter = propertyDesc && propertyDesc.get
  const setter = propertyDesc && propertyDesc.set

  // 不传val的情况
  if (!getter && arguments.length === 2) {
    val = obj[key]
  }



}
