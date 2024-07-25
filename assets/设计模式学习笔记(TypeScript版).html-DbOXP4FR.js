import{_ as s,c as n,o as a,b as i}from"./app-DTZtoZLC.js";const e="/assets/23%E7%A7%8D%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0-CKkIxp7d.png",l={},p=i('<h1 id="设计模式学习笔记-typescript版" tabindex="-1"><a class="header-anchor" href="#设计模式学习笔记-typescript版"><span>设计模式学习笔记(TypeScript版)</span></a></h1><p><img src="'+e+`" alt=""></p><h2 id="目录" tabindex="-1"><a class="header-anchor" href="#目录"><span>目录</span></a></h2><ul><li><a href="#%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0typescript%E7%89%88">设计模式学习笔记(TypeScript版)</a><ul><li><a href="#%E7%9B%AE%E5%BD%95">目录</a></li><li><a href="#%E5%88%9B%E5%BB%BA%E5%9E%8B_1_%E5%B7%A5%E5%8E%82%E6%96%B9%E6%B3%95%E6%A8%A1%E5%BC%8F">创建型:_1_工厂方法模式</a></li><li><a href="#%E5%88%9B%E5%BB%BA%E5%9E%8B_2_%E6%8A%BD%E8%B1%A1%E6%96%B9%E6%B3%95%E6%A8%A1%E5%BC%8F">创建型:_2_抽象方法模式</a></li><li><a href="#%E5%88%9B%E5%BB%BA%E5%9E%8B_3_%E5%8D%95%E4%BE%8B%E6%A8%A1%E5%BC%8F">创建型:_3_单例模式</a></li><li><a href="#%E5%88%9B%E5%BB%BA%E5%9E%8B_4_%E5%BB%BA%E9%80%A0%E8%80%85%E6%A8%A1%E5%BC%8F">创建型:_4_建造者模式</a></li><li><a href="#%E5%88%9B%E5%BB%BA%E5%9E%8B_5_%E5%8E%9F%E5%9E%8B%E6%A8%A1%E5%BC%8F">创建型:_5_原型模式</a></li><li><a href="#%E7%BB%93%E6%9E%84%E5%9E%8B_6_%E9%80%82%E9%85%8D%E5%99%A8%E6%A8%A1%E5%BC%8F">结构型:_6_适配器模式</a><ul><li><a href="#%E5%AF%B9%E8%B1%A1%E9%80%82%E9%85%8D%E5%99%A8%E6%A8%A1%E5%BC%8F">对象适配器模式</a></li><li><a href="#%E7%B1%BB%E9%80%82%E9%85%8D%E5%99%A8%E6%A8%A1%E5%BC%8F">类适配器模式</a></li></ul></li><li><a href="#%E7%BB%93%E6%9E%84%E5%9E%8B_7_%E6%A1%A5%E6%8E%A5%E6%A8%A1%E5%BC%8F">结构型:_7_桥接模式</a></li><li><a href="#%E7%BB%93%E6%9E%84%E5%9E%8B_8_%E7%BB%84%E5%90%88%E6%A8%A1%E5%BC%8F">结构型:_8_组合模式</a></li><li><a href="#%E7%BB%93%E6%9E%84%E5%9E%8B_9_%E8%A3%85%E9%A5%B0%E5%99%A8">结构型:_9_装饰器</a></li><li><a href="#%E7%BB%93%E6%9E%84%E5%9E%8B_10_%E5%A4%96%E8%A7%82%E6%A8%A1%E5%BC%8F">结构型:_10_外观模式</a></li><li><a href="#%E7%BB%93%E6%9E%84%E5%9E%8B_11_%E4%BA%AB%E5%85%83%E6%A8%A1%E5%BC%8F">结构型:_11_享元模式</a></li><li><a href="#%E7%BB%93%E6%9E%84%E5%9E%8B_12_%E4%BB%A3%E7%90%86%E6%A8%A1%E5%BC%8F">结构型:_12_代理模式</a></li><li><a href="#%E8%A1%8C%E4%B8%BA%E5%9E%8B_13_%E8%B4%A3%E4%BB%BB%E9%93%BE%E6%A8%A1%E5%BC%8F">行为型:_13_责任链模式</a></li><li><a href="#%E8%A1%8C%E4%B8%BA%E5%9E%8B_14_%E5%91%BD%E4%BB%A4%E6%A8%A1%E5%BC%8F">行为型:_14_命令模式</a></li><li><a href="#%E8%A1%8C%E4%B8%BA%E5%9E%8B_15_%E8%A7%A3%E9%87%8A%E5%99%A8%E6%A8%A1%E5%BC%8F">行为型:_15_解释器模式</a></li><li><a href="#%E8%A1%8C%E4%B8%BA%E5%9E%8B_16_%E8%BF%AD%E4%BB%A3%E5%99%A8%E6%A8%A1%E5%BC%8F">行为型:_16_迭代器模式</a></li><li><a href="#%E8%A1%8C%E4%B8%BA%E5%9E%8B_17_%E4%B8%AD%E4%BB%8B%E8%80%85%E6%A8%A1%E5%BC%8F">行为型:_17_中介者模式</a></li><li><a href="#%E8%A1%8C%E4%B8%BA%E5%9E%8B_18_%E5%A4%87%E5%BF%98%E5%BD%95%E6%A8%A1%E5%BC%8F">行为型:_18_备忘录模式</a></li><li><a href="#%E8%A1%8C%E4%B8%BA%E5%9E%8B_19_%E8%A7%82%E5%AF%9F%E8%80%85%E6%A8%A1%E5%BC%8F">行为型:_19_观察者模式</a></li><li><a href="#%E8%A1%8C%E4%B8%BA%E5%9E%8B_20_%E7%8A%B6%E6%80%81%E6%A8%A1%E5%BC%8F">行为型:_20_状态模式</a></li><li><a href="#%E8%A1%8C%E4%B8%BA%E5%9E%8B_21_%E7%AD%96%E7%95%A5%E6%A8%A1%E5%BC%8F">行为型:_21_策略模式</a></li><li><a href="#%E8%A1%8C%E4%B8%BA%E5%9E%8B_22_%E6%A8%A1%E6%9D%BF%E6%96%B9%E6%B3%95%E6%A8%A1%E5%BC%8F">行为型:_22_模板方法模式</a></li><li><a href="#%E8%A1%8C%E4%B8%BA%E5%9E%8B_23_%E8%AE%BF%E9%97%AE%E8%80%85">行为型:_23_访问者</a></li></ul></li></ul><h2 id="创建型-1-工厂方法模式" tabindex="-1"><a class="header-anchor" href="#创建型-1-工厂方法模式"><span>创建型:_1_工厂方法模式</span></a></h2><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>// 抽象动物</span></span>
<span class="line"><span>abstract class Animal {</span></span>
<span class="line"><span> abstract getName(): string;</span></span>
<span class="line"><span> abstract getAge(): number;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// 抽象动物工厂</span></span>
<span class="line"><span>abstract class AnimalFactory {</span></span>
<span class="line"><span> abstract getAnimal(): Animal;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// 具体动物工厂，继承抽象动物工厂</span></span>
<span class="line"><span>class RandomAnimalFactory extends AnimalFactory {</span></span>
<span class="line"><span> // 工厂负责封装创建的逻辑，比如这里封装的是随机产生动物的逻辑</span></span>
<span class="line"><span> // 它的另一个优点是在动物的构造函数参数很多时，将产品的创建和使用解耦</span></span>
<span class="line"><span> getAnimal(): Animal {</span></span>
<span class="line"><span>  switch (Math.floor(Math.random() * 2)) {</span></span>
<span class="line"><span>   case 0:</span></span>
<span class="line"><span>    return new Dog(&quot;Fido&quot;, 12);</span></span>
<span class="line"><span>   case 1:</span></span>
<span class="line"><span>    return new Cat(&quot;Garfield&quot;, 15);</span></span>
<span class="line"><span>   default:</span></span>
<span class="line"><span>    return new Dog(&quot;Unknown&quot;, 12);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// 具体动物类，继承抽象动物</span></span>
<span class="line"><span>class Dog extends Animal {</span></span>
<span class="line"><span> constructor(private name: string, private age: number) {</span></span>
<span class="line"><span>  super();</span></span>
<span class="line"><span>  this.name = name;</span></span>
<span class="line"><span>  this.age = age;</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> getName(): string {</span></span>
<span class="line"><span>  return this.name;</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> getAge(): number {</span></span>
<span class="line"><span>  return this.age;</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// 具体动物类，继承抽象动物</span></span>
<span class="line"><span>class Cat extends Animal {</span></span>
<span class="line"><span> constructor(private name: string, private age: number) {</span></span>
<span class="line"><span>  super();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  this.name = name;</span></span>
<span class="line"><span>  this.age = age;</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> getName(): string {</span></span>
<span class="line"><span>  return this.name;</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> getAge(): number {</span></span>
<span class="line"><span>  return this.age;</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>function main() {</span></span>
<span class="line"><span> let animal = new RandomAnimalFactory().getAnimal();</span></span>
<span class="line"><span> console.log(animal.getName());</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>main();</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="创建型-2-抽象方法模式" tabindex="-1"><a class="header-anchor" href="#创建型-2-抽象方法模式"><span>创建型:_2_抽象方法模式</span></a></h2><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>// 抽象按钮组件</span></span>
<span class="line"><span>abstract class ComponentButton {</span></span>
<span class="line"><span> abstract getName(): string;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// 抽象消息框组件</span></span>
<span class="line"><span>abstract class ComponentMessageBox {</span></span>
<span class="line"><span> abstract getName(): string;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 抽象UI工厂</span></span>
<span class="line"><span>// 后续将实现实际工厂类A,用能创建实际按钮类a1和实际消息框类a2,他们是一组互相兼容的组件</span></span>
<span class="line"><span>// 后续将实现实际工厂类B,用能创建实际按钮类b1和实际消息框类b2,他们是一组互相兼容的组件</span></span>
<span class="line"><span>// 后续将实现实际工厂类C,用能创建实际按钮类c1和实际消息框类c2,他们是一组互相兼容的组件</span></span>
<span class="line"><span>abstract class UIFactory {</span></span>
<span class="line"><span> abstract getComponentButton(): ComponentButton;</span></span>
<span class="line"><span> abstract getComponentMessageBox(): ComponentMessageBox;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class MacOsButton extends ComponentButton {</span></span>
<span class="line"><span> getName(): string {</span></span>
<span class="line"><span>  return &quot;MacOsButton&quot;;</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>class MacOsMessageBox extends ComponentMessageBox {</span></span>
<span class="line"><span> getName(): string {</span></span>
<span class="line"><span>  return &quot;MacOsMessageBox&quot;;</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>class WindowsButton extends ComponentButton {</span></span>
<span class="line"><span> getName(): string {</span></span>
<span class="line"><span>  return &quot;WindowsButton&quot;;</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>class WindowsMessageBox extends ComponentMessageBox {</span></span>
<span class="line"><span> getName(): string {</span></span>
<span class="line"><span>  return &quot;WindowsMessageBox&quot;;</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>class LinuxButton extends ComponentButton {</span></span>
<span class="line"><span> getName(): string {</span></span>
<span class="line"><span>  return &quot;LinuxButton&quot;;</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>class LinuxMessageBox extends ComponentMessageBox {</span></span>
<span class="line"><span> getName(): string {</span></span>
<span class="line"><span>  return &quot;LinuxMessageBox&quot;;</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class MacOsUIFactory extends UIFactory {</span></span>
<span class="line"><span> getComponentButton(): ComponentButton {</span></span>
<span class="line"><span>  return new MacOsButton();</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> getComponentMessageBox(): ComponentMessageBox {</span></span>
<span class="line"><span>  return new MacOsMessageBox();</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class WindowsUIFactory extends UIFactory {</span></span>
<span class="line"><span> getComponentButton(): ComponentButton {</span></span>
<span class="line"><span>  return new WindowsButton();</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> getComponentMessageBox(): ComponentMessageBox {</span></span>
<span class="line"><span>  return new WindowsMessageBox();</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class LinuxUIFactory extends UIFactory {</span></span>
<span class="line"><span> getComponentButton(): ComponentButton {</span></span>
<span class="line"><span>  return new LinuxButton();</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> getComponentMessageBox(): ComponentMessageBox {</span></span>
<span class="line"><span>  return new LinuxMessageBox();</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function main() {</span></span>
<span class="line"><span> // let factory = new MacOsUIFactory();  // Mac OS UI</span></span>
<span class="line"><span> // let factory = new WindowsUIFactory(); // Windows UI</span></span>
<span class="line"><span> let factory = new LinuxUIFactory(); // Linux UI</span></span>
<span class="line"><span></span></span>
<span class="line"><span> let componentButton = factory.getComponentButton();</span></span>
<span class="line"><span> let componentMessageBox = factory.getComponentMessageBox();</span></span>
<span class="line"><span></span></span>
<span class="line"><span> console.log(componentButton.getName());</span></span>
<span class="line"><span> console.log(componentMessageBox.getName());</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>main();</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="创建型-3-单例模式" tabindex="-1"><a class="header-anchor" href="#创建型-3-单例模式"><span>创建型:_3_单例模式</span></a></h2><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>// 单例模式保证类只被实例化一次，防止只需要一个实例对象但却被重复实例化，浪费资源</span></span>
<span class="line"><span>class ImgDog extends HTMLImageElement {</span></span>
<span class="line"><span> // 私有化构造方法</span></span>
<span class="line"><span> private constructor() {</span></span>
<span class="line"><span>  super();</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> // 私有静态属性</span></span>
<span class="line"><span> private static INSTANCE = new ImgDog();</span></span>
<span class="line"><span> // 静态代码块</span></span>
<span class="line"><span> static {</span></span>
<span class="line"><span>  ImgDog.INSTANCE.src = &quot;image.png&quot;; // 初始化</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> // 静态方法，获取img实例</span></span>
<span class="line"><span> public static getInstance(): HTMLImageElement {</span></span>
<span class="line"><span>  return ImgDog.INSTANCE;</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function main() {</span></span>
<span class="line"><span> const imgDog1 = ImgDog.getInstance();</span></span>
<span class="line"><span> const imgDog2 = ImgDog.getInstance();</span></span>
<span class="line"><span> console.log(imgDog1 == imgDog2);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>main();</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="创建型-4-建造者模式" tabindex="-1"><a class="header-anchor" href="#创建型-4-建造者模式"><span>创建型:_4_建造者模式</span></a></h2><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>// 车架</span></span>
<span class="line"><span>class Frame {</span></span>
<span class="line"><span> name: string;</span></span>
<span class="line"><span> constructor(name: string) {</span></span>
<span class="line"><span>  this.name = name;</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// 车座</span></span>
<span class="line"><span>class Seat {</span></span>
<span class="line"><span> name: string;</span></span>
<span class="line"><span> constructor(name: string) {</span></span>
<span class="line"><span>  this.name = name;</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 自行车</span></span>
<span class="line"><span>class Bike {</span></span>
<span class="line"><span> private Brand: string;</span></span>
<span class="line"><span> private frame: Frame;</span></span>
<span class="line"><span> private seat: Seat;</span></span>
<span class="line"><span> setBrand(name: string) {</span></span>
<span class="line"><span>  this.Brand = name;</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> setFrame(frame: Frame) {</span></span>
<span class="line"><span>  this.frame = frame;</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> setSeat(seat: Seat) {</span></span>
<span class="line"><span>  this.seat = seat;</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 自行车建造者</span></span>
<span class="line"><span>abstract class BikeBuidler {</span></span>
<span class="line"><span> bike = new Bike();</span></span>
<span class="line"><span> abstract buildFrame(): void;</span></span>
<span class="line"><span> abstract buildSeat(): void;</span></span>
<span class="line"><span> abstract getResult(): Bike;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 指挥者，指挥建造者</span></span>
<span class="line"><span>class Director {</span></span>
<span class="line"><span> constructor(private bikeBuilder: BikeBuidler) {</span></span>
<span class="line"><span>  this.bikeBuilder = bikeBuilder;</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> construct(): Bike {</span></span>
<span class="line"><span>  this.bikeBuilder.buildFrame();</span></span>
<span class="line"><span>  this.bikeBuilder.buildSeat();</span></span>
<span class="line"><span>  return this.bikeBuilder.getResult();</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// ofo 自行车的建造者</span></span>
<span class="line"><span>class OfoBikeBuilder extends BikeBuidler {</span></span>
<span class="line"><span> constructor() {</span></span>
<span class="line"><span>  super();</span></span>
<span class="line"><span>  this.bike.setBrand(&quot;Ofo Bike&quot;); // 设置品牌</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> buildFrame(): void {</span></span>
<span class="line"><span>  this.bike.setFrame(new Frame(&quot;铝合金车架&quot;)); // 建造和组装车脚</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> buildSeat(): void {</span></span>
<span class="line"><span>  this.bike.setSeat(new Seat(&quot;海绵坐垫&quot;)); // 建造和组装车座</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> getResult(): Bike {</span></span>
<span class="line"><span>  return this.bike;</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// mobile 自行车的建造者</span></span>
<span class="line"><span>class MobileBikeBuilder extends BikeBuidler {</span></span>
<span class="line"><span> constructor() {</span></span>
<span class="line"><span>  super();</span></span>
<span class="line"><span>  this.bike.setBrand(&quot;Mobile Bike&quot;); // 设置品牌</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> buildFrame(): void {</span></span>
<span class="line"><span>  this.bike.setFrame(new Frame(&quot;碳纤维车架&quot;)); // 建造和组装车脚</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> buildSeat(): void {</span></span>
<span class="line"><span>  this.bike.setSeat(new Seat(&quot;真皮坐垫&quot;)); // 建造和组装车座</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> getResult(): Bike {</span></span>
<span class="line"><span>  return this.bike;</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function main() {</span></span>
<span class="line"><span> var ofoBike = new Director(new OfoBikeBuilder()).construct();</span></span>
<span class="line"><span> var mobBike = new Director(new MobileBikeBuilder()).construct();</span></span>
<span class="line"><span> console.log(ofoBike);</span></span>
<span class="line"><span> console.log(mobBike);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>main();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/*</span></span>
<span class="line"><span>输出：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Bike {</span></span>
<span class="line"><span>  Brand: &#39;Ofo Bike&#39;,</span></span>
<span class="line"><span>  frame: Frame { name: &#39;铝合金车架&#39; },</span></span>
<span class="line"><span>  seat: Seat { name: &#39;海绵坐垫&#39; }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Bike {</span></span>
<span class="line"><span>  Brand: &#39;Mobile Bike&#39;,</span></span>
<span class="line"><span>  frame: Frame { name: &#39;碳纤维车架&#39; },</span></span>
<span class="line"><span>  seat: Seat { name: &#39;真皮坐垫&#39; }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>*/</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="创建型-5-原型模式" tabindex="-1"><a class="header-anchor" href="#创建型-5-原型模式"><span>创建型:_5_原型模式</span></a></h2><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>interface Clonable {</span></span>
<span class="line"><span> deepClone(): Clonable;</span></span>
<span class="line"><span> clone(): Clonable;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class Demo implements Clonable {</span></span>
<span class="line"><span> name = &quot;Demo&quot;;</span></span>
<span class="line"><span> list = [];</span></span>
<span class="line"><span> clone(): Demo {</span></span>
<span class="line"><span>  return Object.assign(new Demo(), this); // 浅拷贝</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> deepClone(): Demo {</span></span>
<span class="line"><span>  // return JSON.parse(JSON.stringify(this)); // 深拷贝，JSON序列化和反序列化，但其原型对象为{}</span></span>
<span class="line"><span>  return Object.assign(new Demo(), JSON.parse(JSON.stringify(this))); // 深克隆，原型对象为自身</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function main() {</span></span>
<span class="line"><span> var demo1 = new Demo();</span></span>
<span class="line"><span> var demo2 = demo1.deepClone();</span></span>
<span class="line"><span> console.log(demo1);</span></span>
<span class="line"><span> console.log(demo2);</span></span>
<span class="line"><span> console.log(demo1 == demo2);</span></span>
<span class="line"><span> console.log(demo1.list == demo2.list); // fasle 深克隆</span></span>
<span class="line"><span></span></span>
<span class="line"><span> var demo3 = new Demo();</span></span>
<span class="line"><span> var demo4 = demo3.clone();</span></span>
<span class="line"><span> console.log(demo3);</span></span>
<span class="line"><span> console.log(demo4);</span></span>
<span class="line"><span> console.log(demo3 == demo4);</span></span>
<span class="line"><span> console.log(demo3.list == demo4.list); // true 浅拷贝</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>main();</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="结构型-6-适配器模式" tabindex="-1"><a class="header-anchor" href="#结构型-6-适配器模式"><span>结构型:_6_适配器模式</span></a></h2><h3 id="对象适配器模式" tabindex="-1"><a class="header-anchor" href="#对象适配器模式"><span>对象适配器模式</span></a></h3><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>// 对象适配器模式就是以实现接口和聚合的方式来实现适配器</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 1. 有一个旧接口 有一个旧的类 ，旧的类实现了旧的接口</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 被适配的接口，旧的接口</span></span>
<span class="line"><span>interface OldUserInterface {</span></span>
<span class="line"><span> GetUserName(): string; // 旧的命名规范是函数开头大写</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// 旧的User对象，实现的是旧的接口</span></span>
<span class="line"><span>class OldUser implements OldUserInterface {</span></span>
<span class="line"><span> GetUserName(): string {</span></span>
<span class="line"><span>  return &quot;Old_DingYigui&quot;;</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 2. 有一个新的接口 也有新的实现了该接口的类，但不重要，还有一个函数，他的形参要求是一个实现了新接口的对象</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 目标接口，新的接口</span></span>
<span class="line"><span>interface NewUserInterface {</span></span>
<span class="line"><span> getUserName(): string; // 新的命名规范是函数开头小写</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// 新的User类 但不重要</span></span>
<span class="line"><span>class NewUser implements NewUserInterface {</span></span>
<span class="line"><span> getUserName(): string {</span></span>
<span class="line"><span>  return &quot;New_DingYigui&quot;;</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// 根据新接口编写的函数：</span></span>
<span class="line"><span>// 某函数期待的对象是实现了新用户接口的类</span></span>
<span class="line"><span>function welcome(user: NewUserInterface) {</span></span>
<span class="line"><span> console.log(&quot;欢迎你：&quot; + user.getUserName());</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 3. 定义适配器，使得 旧User接口 能够适配 新User接口</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 旧的User对象 为了适配新的接口 所以实现新的接口，然后通过聚合的方式调用旧对象上的对应方法</span></span>
<span class="line"><span>class OldUserToNewUser_Adapter implements NewUserInterface {</span></span>
<span class="line"><span> constructor(private OldUser: OldUserInterface) {</span></span>
<span class="line"><span>  this.OldUser = OldUser;</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> getUserName(): string {</span></span>
<span class="line"><span>  return this.OldUser.GetUserName();</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function main() {</span></span>
<span class="line"><span> // 报错，因为不适配</span></span>
<span class="line"><span> // welcome(new OldUser()); // 因为函数要求形参是一个NewUserInterface类型 但 OldUser 是OldUserInterface类型</span></span>
<span class="line"><span></span></span>
<span class="line"><span> // 经过适配器的转换，不报错</span></span>
<span class="line"><span> welcome(new OldUserToNewUser_Adapter(new OldUser())); // 因为 旧的User对象 放入 适配器 就能满足welcome函数形参的接口要求了</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>main();</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="类适配器模式" tabindex="-1"><a class="header-anchor" href="#类适配器模式"><span>类适配器模式</span></a></h3><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>// 对象适配器模式就是以实现接口和聚合的方式来实现适配器</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 1. 有一个旧接口 有一个旧的类 ，旧的类实现了旧的接口</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 被适配的接口，旧的接口</span></span>
<span class="line"><span>interface OldUserInterface {</span></span>
<span class="line"><span> GetUserName(): string; // 旧的命名规范是函数开头大写</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// 旧的User对象，实现的是旧的接口</span></span>
<span class="line"><span>class OldUser implements OldUserInterface {</span></span>
<span class="line"><span> GetUserName(): string {</span></span>
<span class="line"><span>  return &quot;Old_DingYigui&quot;;</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 2. 有一个新的接口 也有新的实现了该接口的类，但不重要，还有一个函数，他的形参要求是一个实现了新接口的对象</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 目标接口，新的接口</span></span>
<span class="line"><span>interface NewUserInterface {</span></span>
<span class="line"><span> getUserName(): string; // 新的命名规范是函数开头小写</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// 新的User类 但不重要</span></span>
<span class="line"><span>class NewUser implements NewUserInterface {</span></span>
<span class="line"><span> getUserName(): string {</span></span>
<span class="line"><span>  return &quot;New_DingYigui&quot;;</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// 根据新接口编写的函数：</span></span>
<span class="line"><span>// 某函数期待的对象是实现了新用户接口的类</span></span>
<span class="line"><span>function welcome(user: NewUserInterface) {</span></span>
<span class="line"><span> console.log(&quot;欢迎你：&quot; + user.getUserName());</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 3.定义新版本的OldUser，继承旧User对象， 实现新接口，使其适配新接口</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class OldUserToNewUser_Adapter extends OldUser implements NewUserInterface {</span></span>
<span class="line"><span> constructor() {</span></span>
<span class="line"><span>  super();</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> getUserName(): string {</span></span>
<span class="line"><span>  return this.GetUserName();</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function main() {</span></span>
<span class="line"><span> // 报错，因为不适配</span></span>
<span class="line"><span> // welcome(new OldUser()); // 因为函数要求形参是一个NewUserInterface类型 但 OldUser 是OldUserInterface类型</span></span>
<span class="line"><span></span></span>
<span class="line"><span> // 经过适配器的转换，不报错</span></span>
<span class="line"><span> welcome(new OldUserToNewUser_Adapter());</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>main();</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="结构型-7-桥接模式" tabindex="-1"><a class="header-anchor" href="#结构型-7-桥接模式"><span>结构型:_7_桥接模式</span></a></h2><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>// 桥接模式和策略模式有些相似，</span></span>
<span class="line"><span>// 共同点是，都是一个对象对另一个接口的聚合</span></span>
<span class="line"><span>// 区别是，</span></span>
<span class="line"><span>// 策略模式是在强调：\`具体类\`对接口的聚合，多个实现类实现该接口</span></span>
<span class="line"><span>// 桥接模式是在强调：\`抽象类\`对接口的聚合，多个实现类实现该接口，多个具体类继承抽象类</span></span>
<span class="line"><span>// 策略模式属于行为模式，桥接模式属于结构型模式</span></span>
<span class="line"><span>// 案例：</span></span>
<span class="line"><span>// 策略模式：我要画圆。要实心圆，我能够用solidPen来配置。画虚线圆能够用dashedPen来配置。</span></span>
<span class="line"><span>// 桥接模式：同样是画圆，在windows下来画实心圆。就用windowPen+solidPen来配置。在unix下画实心圆就用unixPen+solidPen来配置。假设要再windows下画虚线圆。就用windowsPen+dashedPen来配置，要在unix下画虚线圆，就用unixPen+dashedPen来配置。</span></span>
<span class="line"><span>// 画圆方法中，策略仅仅是考虑算法的替换，而桥接考虑的则是不同平台下须要调用不同的工具，接口仅仅是定义一个方法。而详细实现则由详细实现类完毕。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 文件系统</span></span>
<span class="line"><span>interface myFileSystem {</span></span>
<span class="line"><span> readFile(path: string): string;</span></span>
<span class="line"><span> writeFile(path: string, data: string): void;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 操作系统</span></span>
<span class="line"><span>abstract class OS {</span></span>
<span class="line"><span> abstract fs: myFileSystem; // 操作系统聚合文件系统接口</span></span>
<span class="line"><span> abstract readFile(path: string): string;</span></span>
<span class="line"><span> abstract writeFile(path: string, data: string): void;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class Fat32 implements myFileSystem {</span></span>
<span class="line"><span> readFile(path: string): string {</span></span>
<span class="line"><span>  console.log(&quot;reading file from fat32&quot;);</span></span>
<span class="line"><span>  return &quot;reading file from fat32&quot;;</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> writeFile(path: string, data: string): void {</span></span>
<span class="line"><span>  console.log(&quot;writing file to fat32&quot;);</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>class NTFS implements myFileSystem {</span></span>
<span class="line"><span> readFile(path: string): string {</span></span>
<span class="line"><span>  console.log(&quot;reading file from ntfs&quot;);</span></span>
<span class="line"><span>  return &quot;reading file from ntfs&quot;;</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> writeFile(path: string, data: string): void {</span></span>
<span class="line"><span>  console.log(&quot;writing file to ntfs&quot;);</span></span>
<span class="line"><span>  return;</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class WindowOS implements OS {</span></span>
<span class="line"><span> fs: myFileSystem;</span></span>
<span class="line"><span> constructor(fs: myFileSystem) {</span></span>
<span class="line"><span>  this.fs = fs;</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> readFile(path: string): string {</span></span>
<span class="line"><span>  console.log(&quot;windows is reading file&quot;);</span></span>
<span class="line"><span>  return this.fs.readFile(path);</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> writeFile(path: string, data: string): void {</span></span>
<span class="line"><span>  console.log(&quot;windows is writing file&quot;);</span></span>
<span class="line"><span>  return this.fs.writeFile(path, data);</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class Unix implements OS {</span></span>
<span class="line"><span> fs: myFileSystem;</span></span>
<span class="line"><span> constructor(fs: myFileSystem) {</span></span>
<span class="line"><span>  this.fs = fs;</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> readFile(path: string): string {</span></span>
<span class="line"><span>  console.log(&quot;unix is reading file&quot;);</span></span>
<span class="line"><span>  return this.fs.readFile(path);</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> writeFile(path: string, data: string): void {</span></span>
<span class="line"><span>  console.log(&quot;unix is writing file&quot;);</span></span>
<span class="line"><span>  return this.fs.writeFile(path, data);</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function main() {</span></span>
<span class="line"><span> var windowOS = new WindowOS(new Fat32()); // Windows with fat32</span></span>
<span class="line"><span> var windowOS = new WindowOS(new NTFS()); // Windows with ntfs</span></span>
<span class="line"><span> windowOS.readFile(&quot;/code/123.txt&quot;);</span></span>
<span class="line"><span> windowOS.writeFile(&quot;/code/123.txt&quot;, &quot;123&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span> var unixOS = new Unix(new NTFS()); //unix with ntfs</span></span>
<span class="line"><span> var unixOS = new Unix(new Fat32()); // unix with fat32</span></span>
<span class="line"><span> unixOS.readFile(&quot;/code/123.txt&quot;);</span></span>
<span class="line"><span> unixOS.writeFile(&quot;/code/123.txt&quot;, &quot;123&quot;);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>main();</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="结构型-8-组合模式" tabindex="-1"><a class="header-anchor" href="#结构型-8-组合模式"><span>结构型:_8_组合模式</span></a></h2><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>interface Component {</span></span>
<span class="line"><span> getName(): string;</span></span>
<span class="line"><span> getLevel(): number;</span></span>
<span class="line"><span> doSomething(): void;</span></span>
<span class="line"><span> print(): void;</span></span>
<span class="line"><span> getSize(): number;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>interface MenuComponent extends Component {</span></span>
<span class="line"><span> childs: Array&lt;Component&gt;;</span></span>
<span class="line"><span> add(component: Component): MenuComponent;</span></span>
<span class="line"><span> remove(component: Component): MenuComponent;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>interface ItemComponent extends Component {}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class MenuComponent implements MenuComponent {</span></span>
<span class="line"><span> public childs: Array&lt;Component&gt; = [];</span></span>
<span class="line"><span> constructor(private name: string, private level: number) {</span></span>
<span class="line"><span>  this.name = name;</span></span>
<span class="line"><span>  this.level = level;</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> getName() {</span></span>
<span class="line"><span>  return this.name;</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> getLevel() {</span></span>
<span class="line"><span>  return this.level;</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> add(component: Component) {</span></span>
<span class="line"><span>  this.childs.push(component);</span></span>
<span class="line"><span>  return this;</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> remove(component: Component) {</span></span>
<span class="line"><span>  this.childs.splice(this.childs.indexOf(component), 1);</span></span>
<span class="line"><span>  return this;</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> doSomething() {</span></span>
<span class="line"><span>  this.childs.forEach(item =&gt; item.doSomething());</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> print(): void {</span></span>
<span class="line"><span>  var array = new Array(this.getLevel() - 1).fill(&quot;\\t&quot;);</span></span>
<span class="line"><span>  array.push(this.name);</span></span>
<span class="line"><span>  console.log(...array);</span></span>
<span class="line"><span>  this.childs.forEach(item =&gt; item.print());</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> getSize() {</span></span>
<span class="line"><span>  let size = 0;</span></span>
<span class="line"><span>  this.childs.forEach(item =&gt; (size += item.getSize()));</span></span>
<span class="line"><span>  return size;</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class ItemComponent implements ItemComponent {</span></span>
<span class="line"><span> constructor(private name: string, private level: number, private size: number) {</span></span>
<span class="line"><span>  this.name = name;</span></span>
<span class="line"><span>  this.level = level;</span></span>
<span class="line"><span>  this.size = size;</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> getName() {</span></span>
<span class="line"><span>  return this.name;</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> getLevel() {</span></span>
<span class="line"><span>  return this.level;</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> doSomething() {</span></span>
<span class="line"><span>  console.log(&quot;doSomething&quot;);</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> print(): void {</span></span>
<span class="line"><span>  var array = new Array(this.getLevel() - 1).fill(&quot;\\t&quot;);</span></span>
<span class="line"><span>  array.push(this.name);</span></span>
<span class="line"><span>  console.log(...array);</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> getSize() {</span></span>
<span class="line"><span>  return this.size;</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function main() {</span></span>
<span class="line"><span> const menuRootComponent = new MenuComponent(&quot;MenuRoot&quot;, 1);</span></span>
<span class="line"><span> menuRootComponent</span></span>
<span class="line"><span>  .add(new ItemComponent(&quot;Item&quot;, 2, 1))</span></span>
<span class="line"><span>  .add(new ItemComponent(&quot;Item&quot;, 2, 1))</span></span>
<span class="line"><span>  .add(new MenuComponent(&quot;Menu&quot;, 2).add(new ItemComponent(&quot;Item&quot;, 3, 1)).add(new ItemComponent(&quot;Item&quot;, 3, 1)).add(new ItemComponent(&quot;Item&quot;, 3, 1)))</span></span>
<span class="line"><span>  .add(</span></span>
<span class="line"><span>   new MenuComponent(&quot;Menu&quot;, 2)</span></span>
<span class="line"><span>    .add(new ItemComponent(&quot;Item&quot;, 3, 1))</span></span>
<span class="line"><span>    .add(new ItemComponent(&quot;Item&quot;, 3, 1))</span></span>
<span class="line"><span>    .add(new ItemComponent(&quot;Item&quot;, 3, 1))</span></span>
<span class="line"><span>    .add(</span></span>
<span class="line"><span>     new MenuComponent(&quot;Menu&quot;, 3).add(new ItemComponent(&quot;Item&quot;, 4, 1)).add(new ItemComponent(&quot;Item&quot;, 4, 1)).add(new ItemComponent(&quot;Item&quot;, 4, 1))</span></span>
<span class="line"><span>    )</span></span>
<span class="line"><span>  );</span></span>
<span class="line"><span> console.log(&quot;size:&quot;, menuRootComponent.getSize());</span></span>
<span class="line"><span> console.log(JSON.stringify(menuRootComponent, null, 4));</span></span>
<span class="line"><span> menuRootComponent.print();</span></span>
<span class="line"><span> menuRootComponent.doSomething();</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>main();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/*</span></span>
<span class="line"><span> * Output:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    &quot;name&quot;: &quot;MenuRoot&quot;,</span></span>
<span class="line"><span>    &quot;level&quot;: 1,</span></span>
<span class="line"><span>    &quot;childs&quot;: [</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            &quot;name&quot;: &quot;Item&quot;,</span></span>
<span class="line"><span>            &quot;level&quot;: 2</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            &quot;name&quot;: &quot;Item&quot;,</span></span>
<span class="line"><span>            &quot;level&quot;: 2</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            &quot;name&quot;: &quot;Menu&quot;,</span></span>
<span class="line"><span>            &quot;level&quot;: 2,</span></span>
<span class="line"><span>            &quot;childs&quot;: [</span></span>
<span class="line"><span>                {</span></span>
<span class="line"><span>                    &quot;name&quot;: &quot;Item&quot;,</span></span>
<span class="line"><span>                    &quot;level&quot;: 3</span></span>
<span class="line"><span>                },</span></span>
<span class="line"><span>                {</span></span>
<span class="line"><span>                    &quot;name&quot;: &quot;Item&quot;,</span></span>
<span class="line"><span>                    &quot;level&quot;: 3</span></span>
<span class="line"><span>                },</span></span>
<span class="line"><span>                {</span></span>
<span class="line"><span>                    &quot;name&quot;: &quot;Item&quot;,</span></span>
<span class="line"><span>                    &quot;level&quot;: 3</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            ]</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            &quot;name&quot;: &quot;Menu&quot;,</span></span>
<span class="line"><span>            &quot;level&quot;: 2,</span></span>
<span class="line"><span>            &quot;childs&quot;: [</span></span>
<span class="line"><span>                {</span></span>
<span class="line"><span>                    &quot;name&quot;: &quot;Item&quot;,</span></span>
<span class="line"><span>                    &quot;level&quot;: 3</span></span>
<span class="line"><span>                },</span></span>
<span class="line"><span>                {</span></span>
<span class="line"><span>                    &quot;name&quot;: &quot;Item&quot;,</span></span>
<span class="line"><span>                    &quot;level&quot;: 3</span></span>
<span class="line"><span>                },</span></span>
<span class="line"><span>                {</span></span>
<span class="line"><span>                    &quot;name&quot;: &quot;Item&quot;,</span></span>
<span class="line"><span>                    &quot;level&quot;: 3</span></span>
<span class="line"><span>                },</span></span>
<span class="line"><span>                {</span></span>
<span class="line"><span>                    &quot;name&quot;: &quot;Menu&quot;,</span></span>
<span class="line"><span>                    &quot;level&quot;: 3,</span></span>
<span class="line"><span>                    &quot;childs&quot;: [</span></span>
<span class="line"><span>                        {</span></span>
<span class="line"><span>                            &quot;name&quot;: &quot;Item&quot;,</span></span>
<span class="line"><span>                            &quot;level&quot;: 4</span></span>
<span class="line"><span>                        },</span></span>
<span class="line"><span>                        {</span></span>
<span class="line"><span>                            &quot;name&quot;: &quot;Item&quot;,</span></span>
<span class="line"><span>                            &quot;level&quot;: 4</span></span>
<span class="line"><span>                        },</span></span>
<span class="line"><span>                        {</span></span>
<span class="line"><span>                            &quot;name&quot;: &quot;Item&quot;,</span></span>
<span class="line"><span>                            &quot;level&quot;: 4</span></span>
<span class="line"><span>                        }</span></span>
<span class="line"><span>                    ]</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            ]</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>MenuRoot</span></span>
<span class="line"><span>         Item</span></span>
<span class="line"><span>         Item</span></span>
<span class="line"><span>         Menu</span></span>
<span class="line"><span>                 Item</span></span>
<span class="line"><span>                 Item</span></span>
<span class="line"><span>                 Item</span></span>
<span class="line"><span>         Menu</span></span>
<span class="line"><span>                 Item</span></span>
<span class="line"><span>                 Item</span></span>
<span class="line"><span>                 Item</span></span>
<span class="line"><span>                 Menu</span></span>
<span class="line"><span>                         Item</span></span>
<span class="line"><span>                         Item</span></span>
<span class="line"><span>                         Item</span></span>
<span class="line"><span>*/</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="结构型-9-装饰器" tabindex="-1"><a class="header-anchor" href="#结构型-9-装饰器"><span>结构型:_9_装饰器</span></a></h2><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>// 咖啡类</span></span>
<span class="line"><span>abstract class Coffee {</span></span>
<span class="line"><span> abstract getDescription(): string;</span></span>
<span class="line"><span> abstract getCost(): number;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// 咖啡类的装饰器：继承咖啡类，并聚合咖啡类</span></span>
<span class="line"><span>abstract class CoffeeDecorator extends Coffee {</span></span>
<span class="line"><span> beDecorated: Coffee; // 被装饰的咖啡</span></span>
<span class="line"><span> constructor(beDecorated: Coffee) {</span></span>
<span class="line"><span>  super();</span></span>
<span class="line"><span>  this.beDecorated = beDecorated;</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 美式咖啡</span></span>
<span class="line"><span>class AmericaCoffee extends Coffee {</span></span>
<span class="line"><span> getDescription() {</span></span>
<span class="line"><span>  return &quot;American coffee&quot;;</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> getCost() {</span></span>
<span class="line"><span>  return 10;</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// 意式咖啡</span></span>
<span class="line"><span>class ItalyCoffee extends Coffee {</span></span>
<span class="line"><span> getDescription() {</span></span>
<span class="line"><span>  return &quot;Italian coffee&quot;;</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> getCost() {</span></span>
<span class="line"><span>  return 20;</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 加糖</span></span>
<span class="line"><span>class SugerCoffeeDecorator extends CoffeeDecorator {</span></span>
<span class="line"><span> constructor(public beDecorated: Coffee) {</span></span>
<span class="line"><span>  super(beDecorated);</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> getDescription() {</span></span>
<span class="line"><span>  return this.beDecorated.getDescription() + &quot; with Suger&quot;; // 装饰后的描述是原描述+&quot; with Suger&quot;</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> getCost() {</span></span>
<span class="line"><span>  return this.beDecorated.getCost() + 1; // 装饰后的价格是原价格+1</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// 加牛奶</span></span>
<span class="line"><span>class MilkCoffeeDecorator extends CoffeeDecorator {</span></span>
<span class="line"><span> constructor(public beDecorated: Coffee) {</span></span>
<span class="line"><span>  super(beDecorated);</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> getDescription() {</span></span>
<span class="line"><span>  return this.beDecorated.getDescription() + &quot; with Milk&quot;;</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> getCost() {</span></span>
<span class="line"><span>  return this.beDecorated.getCost() + 5;</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function main() {</span></span>
<span class="line"><span> let americaCoffee = new AmericaCoffee(); // 美式咖啡</span></span>
<span class="line"><span> let decoratedWithSuger = new SugerCoffeeDecorator(americaCoffee); // 美式咖啡加糖</span></span>
<span class="line"><span> let decoratedWithMilk = new MilkCoffeeDecorator(decoratedWithSuger); // 美式咖啡加糖后再加牛奶</span></span>
<span class="line"><span></span></span>
<span class="line"><span> console.log(decoratedWithMilk.getDescription());</span></span>
<span class="line"><span> console.log(decoratedWithMilk.getCost());</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>main();</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="结构型-10-外观模式" tabindex="-1"><a class="header-anchor" href="#结构型-10-外观模式"><span>结构型:_10_外观模式</span></a></h2><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>// 外观模式非常简单，就是对于一个使用起来复杂度较高的系统，另外封装成一个类，</span></span>
<span class="line"><span>// 让这个类来接管如何使用这个系统，这种写法平时也会自然而然的写出来，没啥好说的</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import { Game } from &quot;./Game&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function main() {</span></span>
<span class="line"><span> let game = new Game(); // 外观模式，把整个系统的复杂的调用细节再封装为一个类，通过这个类来运行这个系统</span></span>
<span class="line"><span> game.start();</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>main();</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="结构型-11-享元模式" tabindex="-1"><a class="header-anchor" href="#结构型-11-享元模式"><span>结构型:_11_享元模式</span></a></h2><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>// 享元模式的概念和单例的概念有些类似，</span></span>
<span class="line"><span>// 但单例模式是一个对象只能被创建一个</span></span>
<span class="line"><span>// 享元模式是，一个对象能够被创建多次，但只是通过一个共享容器，让具有某一条件的对象只被初始化一次，而这种具体的条件可以很灵活的由创建工厂来控制</span></span>
<span class="line"><span>interface Shape {</span></span>
<span class="line"><span> draw(): void;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>class Box implements Shape {</span></span>
<span class="line"><span> constructor(</span></span>
<span class="line"><span>  // private posX: number, // 要被共享，就只应当具有公共不变的属性</span></span>
<span class="line"><span>  // private posY: number,</span></span>
<span class="line"><span>  private width: number,</span></span>
<span class="line"><span>  private height: number,</span></span>
<span class="line"><span>  private color: string</span></span>
<span class="line"><span> ) {</span></span>
<span class="line"><span>  // this.posX = posX;</span></span>
<span class="line"><span>  // this.posY = posY;</span></span>
<span class="line"><span>  this.width = width;</span></span>
<span class="line"><span>  this.height = height;</span></span>
<span class="line"><span>  this.color = color;</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> setColor(color: string): void {</span></span>
<span class="line"><span>  this.color = color;</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> draw(): void {</span></span>
<span class="line"><span>  console.log(JSON.stringify(this, undefined, 4));</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class BoxFactory {</span></span>
<span class="line"><span> static boxMap = new Map&lt;string, Box&gt;();</span></span>
<span class="line"><span> static getBox(color: string): Box {</span></span>
<span class="line"><span>  if (this.boxMap.has(color)) {</span></span>
<span class="line"><span>   return this.boxMap.get(color) as Box;</span></span>
<span class="line"><span>  } else {</span></span>
<span class="line"><span>   var box = new Box(100, 100, color);</span></span>
<span class="line"><span>   this.boxMap.set(color, box);</span></span>
<span class="line"><span>   return box;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function main() {</span></span>
<span class="line"><span> var box1 = BoxFactory.getBox(&quot;red&quot;);</span></span>
<span class="line"><span> var box2 = BoxFactory.getBox(&quot;red&quot;);</span></span>
<span class="line"><span> var box3 = BoxFactory.getBox(&quot;pink&quot;);</span></span>
<span class="line"><span> console.log(new Box(100, 100, &quot;red&quot;) == new Box(100, 100, &quot;red&quot;)); // 重复创建对象 不是同一个对象</span></span>
<span class="line"><span> console.log(box1 == box2); // 是同一个对象，避免了重复创建对象，节省了内存</span></span>
<span class="line"><span> console.log(box2 == box3); // 不是同一个对象，对于不存在的对象，会在第一次创建对象，</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>main();</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="结构型-12-代理模式" tabindex="-1"><a class="header-anchor" href="#结构型-12-代理模式"><span>结构型:_12_代理模式</span></a></h2><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>interface interfaceA {</span></span>
<span class="line"><span> methodA(): void;</span></span>
<span class="line"><span> methodB(): void;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class A implements interfaceA {</span></span>
<span class="line"><span> methodA(): void {</span></span>
<span class="line"><span>  console.log(&quot;A:methodA&quot;);</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span></span></span>
<span class="line"><span> methodB(): void {</span></span>
<span class="line"><span>  console.log(&quot;A:methodB&quot;);</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class ProxyA implements interfaceA {</span></span>
<span class="line"><span> constructor(private a: A) {</span></span>
<span class="line"><span>  this.a = a;</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> methodA(): void {</span></span>
<span class="line"><span>  console.log(&quot;Proxy:MethodA&quot;);</span></span>
<span class="line"><span>  this.a.methodA();</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> methodB(): void {</span></span>
<span class="line"><span>  console.log(&quot;Proxy:MethodB&quot;);</span></span>
<span class="line"><span>  this.a.methodB();</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function main() {</span></span>
<span class="line"><span> let proxyA = new ProxyA(new A());</span></span>
<span class="line"><span> proxyA.methodA();</span></span>
<span class="line"><span> proxyA.methodB();</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>main();</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="行为型-13-责任链模式" tabindex="-1"><a class="header-anchor" href="#行为型-13-责任链模式"><span>行为型:_13_责任链模式</span></a></h2><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>abstract class AbsLogger {</span></span>
<span class="line"><span> private level: number;</span></span>
<span class="line"><span> private next: AbsLogger | null;</span></span>
<span class="line"><span> setLevel(level: number): AbsLogger {</span></span>
<span class="line"><span>  this.level = level;</span></span>
<span class="line"><span>  return this;</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> setNext(next: AbsLogger | null): AbsLogger {</span></span>
<span class="line"><span>  this.next = next;</span></span>
<span class="line"><span>  return this;</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> public logMsg(level: number, msg: string) {</span></span>
<span class="line"><span>  if (this.level &gt;= level) {</span></span>
<span class="line"><span>   this.write(level, msg);</span></span>
<span class="line"><span>  } else if (this.next) {</span></span>
<span class="line"><span>   this.next.logMsg(level, msg);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> abstract write(level: number, msg: string): void;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class ErrorLogger extends AbsLogger {</span></span>
<span class="line"><span> public write(level: number, msg: string) {</span></span>
<span class="line"><span>  console.warn(&quot;error:&quot;, level, msg);</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>class DebugLogger extends AbsLogger {</span></span>
<span class="line"><span> public write(level: number, msg: string) {</span></span>
<span class="line"><span>  console.log(&quot;debug:&quot;, level, msg);</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>class InfoLogger extends AbsLogger {</span></span>
<span class="line"><span> public write(level: number, msg: string) {</span></span>
<span class="line"><span>  console.log(&quot;info:&quot;, level, msg);</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class LoggerChain {</span></span>
<span class="line"><span> private static head: AbsLogger;</span></span>
<span class="line"><span> private constructor() {}</span></span>
<span class="line"><span> static {</span></span>
<span class="line"><span>  var info = new InfoLogger();</span></span>
<span class="line"><span>  var debug = new DebugLogger();</span></span>
<span class="line"><span>  var error = new ErrorLogger();</span></span>
<span class="line"><span>  info.setLevel(3).setNext(debug);</span></span>
<span class="line"><span>  debug.setLevel(2).setNext(error);</span></span>
<span class="line"><span>  error.setLevel(1).setNext(null);</span></span>
<span class="line"><span>  LoggerChain.head = info;</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> static getLogger() {</span></span>
<span class="line"><span>  return LoggerChain.head;</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function main() {</span></span>
<span class="line"><span> LoggerChain.getLogger().logMsg(3, &quot;ha ha ha ha&quot;);</span></span>
<span class="line"><span> LoggerChain.getLogger().logMsg(2, &quot;ha ha ha ha&quot;);</span></span>
<span class="line"><span> LoggerChain.getLogger().logMsg(1, &quot;ha ha ha ha&quot;);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>main();</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="行为型-14-命令模式" tabindex="-1"><a class="header-anchor" href="#行为型-14-命令模式"><span>行为型:_14_命令模式</span></a></h2><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>// 命令接口</span></span>
<span class="line"><span>interface ICommand {</span></span>
<span class="line"><span> execute(): void;</span></span>
<span class="line"><span> unexecute(): void;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 灯</span></span>
<span class="line"><span>class Ligtht {</span></span>
<span class="line"><span> turnOn() {</span></span>
<span class="line"><span>  console.log(&quot;light is turn on&quot;); // 开灯</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> turnOff() {</span></span>
<span class="line"><span>  console.log(&quot;light is turn off&quot;); // 关灯</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> down() {</span></span>
<span class="line"><span>  console.log(&quot;light is down&quot;); // 降低亮度</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> up() {</span></span>
<span class="line"><span>  console.log(&quot;light is up&quot;); // 调高亮度</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 开灯命令</span></span>
<span class="line"><span>class LightTurnOnCommand implements ICommand {</span></span>
<span class="line"><span> constructor(private ligtht: Ligtht) {</span></span>
<span class="line"><span>  this.ligtht = ligtht;</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> execute(): void {</span></span>
<span class="line"><span>  this.ligtht.turnOn(); // 执行命令</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> unexecute(): void {</span></span>
<span class="line"><span>  this.ligtht.turnOff(); // 撤销命令</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 关灯命令</span></span>
<span class="line"><span>class LightTurnOffCommand implements ICommand {</span></span>
<span class="line"><span> constructor(private ligtht: Ligtht) {</span></span>
<span class="line"><span>  this.ligtht = ligtht;</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> execute(): void {</span></span>
<span class="line"><span>  this.ligtht.turnOff(); // 执行命令</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> unexecute(): void {</span></span>
<span class="line"><span>  this.ligtht.turnOn(); // 撤销命令</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// 降低亮度</span></span>
<span class="line"><span>class LightDownCommand implements ICommand {</span></span>
<span class="line"><span> constructor(private ligtht: Ligtht) {</span></span>
<span class="line"><span>  this.ligtht = ligtht;</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> execute(): void {</span></span>
<span class="line"><span>  this.ligtht.down(); // 执行命令</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> unexecute(): void {</span></span>
<span class="line"><span>  this.ligtht.up(); // 撤销命令</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 调高亮度</span></span>
<span class="line"><span>class LightUpCommand implements ICommand {</span></span>
<span class="line"><span> constructor(private ligtht: Ligtht) {</span></span>
<span class="line"><span>  this.ligtht = ligtht;</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> execute(): void {</span></span>
<span class="line"><span>  this.ligtht.up(); // 执行命令</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> unexecute(): void {</span></span>
<span class="line"><span>  this.ligtht.down(); // 撤销命令</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 电视</span></span>
<span class="line"><span>class TV {</span></span>
<span class="line"><span> turnOn() {</span></span>
<span class="line"><span>  console.log(&quot;TV is turn on&quot;); // 开灯</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> turnOff() {</span></span>
<span class="line"><span>  console.log(&quot;TV is turn off&quot;); // 关灯</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// 开电视命令</span></span>
<span class="line"><span>class TVTurnOnCommand implements ICommand {</span></span>
<span class="line"><span> constructor(private tv: TV) {</span></span>
<span class="line"><span>  this.tv = tv;</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> execute(): void {</span></span>
<span class="line"><span>  this.tv.turnOn(); // 执行命令</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> unexecute(): void {</span></span>
<span class="line"><span>  this.tv.turnOff(); // 撤销命令</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 关电视命令</span></span>
<span class="line"><span>class TVTurnOffCommand implements ICommand {</span></span>
<span class="line"><span> constructor(private tv: TV) {</span></span>
<span class="line"><span>  this.tv = tv;</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> execute(): void {</span></span>
<span class="line"><span>  this.tv.turnOff(); // 执行命令</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> unexecute(): void {</span></span>
<span class="line"><span>  this.tv.turnOn(); // 撤销命令</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 命令触发器</span></span>
<span class="line"><span>class CommandInvoker {</span></span>
<span class="line"><span> // 执行和撤销的历史记录</span></span>
<span class="line"><span> history_do: Array&lt;ICommand&gt; = [];</span></span>
<span class="line"><span> history_undo: Array&lt;ICommand&gt; = [];</span></span>
<span class="line"><span></span></span>
<span class="line"><span> // 一般命名为：setCommand(),但这里为了保持命名格式一致</span></span>
<span class="line"><span> ToDoCommand(ToDoCommand: ICommand): void {</span></span>
<span class="line"><span>  console.log(&quot;执行命令：&quot;);</span></span>
<span class="line"><span>  ToDoCommand.execute(); // 执行命令</span></span>
<span class="line"><span>  this.history_do.push(ToDoCommand); // 添加到历史记录</span></span>
<span class="line"><span>  this.history_undo = []; // 清除撤销历史记录</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> // 撤销命令</span></span>
<span class="line"><span> UndoCommand() {</span></span>
<span class="line"><span>  let UnDoCommand = this.history_do.pop(); // 获取栈顶命令</span></span>
<span class="line"><span>  if (UnDoCommand) {</span></span>
<span class="line"><span>   console.log(&quot;撤销命令：&quot;);</span></span>
<span class="line"><span>   UnDoCommand.unexecute(); // 撤销命令</span></span>
<span class="line"><span>   this.history_undo.push(UnDoCommand); // 添加到撤销历史记录</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> // 重做命令</span></span>
<span class="line"><span> RedoCommand() {</span></span>
<span class="line"><span>  let ReDoCommand = this.history_undo.pop(); // 获取最后一条已撤销的命令</span></span>
<span class="line"><span>  if (ReDoCommand) {</span></span>
<span class="line"><span>   console.log(&quot;重做命令：&quot;);</span></span>
<span class="line"><span>   ReDoCommand.execute(); // 重做</span></span>
<span class="line"><span>   this.history_do.push(ReDoCommand); // 添加到历史记录</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function main() {</span></span>
<span class="line"><span> let light = new Ligtht(); // 灯</span></span>
<span class="line"><span> let tv = new TV(); // 电视</span></span>
<span class="line"><span> let commandInvoker = new CommandInvoker(); // 命令触发器（智能遥控器）</span></span>
<span class="line"><span></span></span>
<span class="line"><span> commandInvoker.ToDoCommand(new LightTurnOnCommand(light)); // 开灯</span></span>
<span class="line"><span> commandInvoker.ToDoCommand(new LightTurnOffCommand(light)); // 关灯</span></span>
<span class="line"><span> commandInvoker.ToDoCommand(new LightUpCommand(light)); // 灯调亮</span></span>
<span class="line"><span> commandInvoker.ToDoCommand(new LightDownCommand(light)); // 灯调暗</span></span>
<span class="line"><span></span></span>
<span class="line"><span> commandInvoker.ToDoCommand(new TVTurnOnCommand(tv)); // 开电视</span></span>
<span class="line"><span> commandInvoker.ToDoCommand(new TVTurnOffCommand(tv)); // 关电视</span></span>
<span class="line"><span></span></span>
<span class="line"><span> commandInvoker.UndoCommand(); // 撤销</span></span>
<span class="line"><span> commandInvoker.UndoCommand(); // 撤销</span></span>
<span class="line"><span> commandInvoker.UndoCommand(); // 撤销</span></span>
<span class="line"><span> commandInvoker.UndoCommand(); // 撤销</span></span>
<span class="line"><span> commandInvoker.RedoCommand(); // 重做</span></span>
<span class="line"><span> commandInvoker.RedoCommand(); // 重做</span></span>
<span class="line"><span> commandInvoker.ToDoCommand(new LightTurnOffCommand(light)); // 关灯</span></span>
<span class="line"><span> commandInvoker.RedoCommand(); // 重做，无法重做，因为撤销历史被覆盖</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>main();</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="行为型-15-解释器模式" tabindex="-1"><a class="header-anchor" href="#行为型-15-解释器模式"><span>行为型:_15_解释器模式</span></a></h2><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>interface Expression {</span></span>
<span class="line"><span> interpret(context: Context): number;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class Variable implements Expression {</span></span>
<span class="line"><span> constructor(protected name) {</span></span>
<span class="line"><span>  this.name = name;</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> interpret(context: Context) {</span></span>
<span class="line"><span>  return context.getValue(this)?.interpret(context) as number;</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>class Value implements Expression {</span></span>
<span class="line"><span> constructor(protected value: number) {</span></span>
<span class="line"><span>  this.value = value;</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> interpret(context: Context) {</span></span>
<span class="line"><span>  return this.value;</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>class Add implements Expression {</span></span>
<span class="line"><span> constructor(protected left: Expression, protected right: Expression) {</span></span>
<span class="line"><span>  this.left = left;</span></span>
<span class="line"><span>  this.right = right;</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> interpret(context: Context) {</span></span>
<span class="line"><span>  return this.left.interpret(context) + this.right.interpret(context);</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>class Minus implements Expression {</span></span>
<span class="line"><span> constructor(protected left: Expression, protected right: Expression) {</span></span>
<span class="line"><span>  this.left = left;</span></span>
<span class="line"><span>  this.right = right;</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> interpret(context: Context) {</span></span>
<span class="line"><span>  return this.left.interpret(context) - this.right.interpret(context);</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class SingleEqual implements Expression {</span></span>
<span class="line"><span> constructor(protected left: Variable, protected right: Expression) {</span></span>
<span class="line"><span>  this.left = left;</span></span>
<span class="line"><span>  this.right = right;</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> interpret(context: Context) {</span></span>
<span class="line"><span>  context.setValue(this.left, new Value(this.right.interpret(context)));</span></span>
<span class="line"><span>  return this.left.interpret(context);</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class Pow implements Expression {</span></span>
<span class="line"><span> constructor(protected left: Expression, protected right: Expression) {</span></span>
<span class="line"><span>  this.left = left;</span></span>
<span class="line"><span>  this.right = right;</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> interpret(context: Context) {</span></span>
<span class="line"><span>  return Math.pow(this.left.interpret(context), this.right.interpret(context));</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class Context {</span></span>
<span class="line"><span> context = new Map&lt;Variable, Value&gt;();</span></span>
<span class="line"><span> setValue(variable: Variable, value: Value) {</span></span>
<span class="line"><span>  this.context.set(variable, value);</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> getValue(variable: Variable) {</span></span>
<span class="line"><span>  return this.context.get(variable);</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function main1() {</span></span>
<span class="line"><span> // 上下文</span></span>
<span class="line"><span> const ctx = new Context();</span></span>
<span class="line"><span></span></span>
<span class="line"><span> const a = new Variable(&quot;a&quot;);</span></span>
<span class="line"><span> const b = new Variable(&quot;b&quot;);</span></span>
<span class="line"><span> const c = new Variable(&quot;c&quot;);</span></span>
<span class="line"><span> const d = new Variable(&quot;d&quot;);</span></span>
<span class="line"><span> const result = new Variable(&quot;result&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span> // 赋值</span></span>
<span class="line"><span> new SingleEqual(a, new Value(1)).interpret(ctx); // a = 1</span></span>
<span class="line"><span> new SingleEqual(b, new Value(2)).interpret(ctx); // b = 2</span></span>
<span class="line"><span> new SingleEqual(c, new Value(3)).interpret(ctx); // c = 3</span></span>
<span class="line"><span> new SingleEqual(d, new Value(4)).interpret(ctx); // d = 4</span></span>
<span class="line"><span></span></span>
<span class="line"><span> // result = (a+b)-(c+d)</span></span>
<span class="line"><span> new SingleEqual(result, new Minus(new Add(a, b), new Add(c, d))).interpret(ctx);</span></span>
<span class="line"><span></span></span>
<span class="line"><span> console.log(result.interpret(ctx));</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>main1();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function main2() {</span></span>
<span class="line"><span> // 上下文</span></span>
<span class="line"><span> const ctx = new Context();</span></span>
<span class="line"><span></span></span>
<span class="line"><span> const a = new Variable(&quot;a&quot;);</span></span>
<span class="line"><span> const b = new Variable(&quot;b&quot;);</span></span>
<span class="line"><span> const result = new Variable(&quot;result&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span> // 赋值</span></span>
<span class="line"><span> new SingleEqual(a, new Value(2)).interpret(ctx); // a = 2</span></span>
<span class="line"><span> new SingleEqual(b, new Value(3)).interpret(ctx); // b = 3</span></span>
<span class="line"><span></span></span>
<span class="line"><span> // result = (a+b)-(c+d)</span></span>
<span class="line"><span> new SingleEqual(result, new Pow(a, b)).interpret(ctx);</span></span>
<span class="line"><span></span></span>
<span class="line"><span> console.log(result.interpret(ctx));</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// main2();</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="行为型-16-迭代器模式" tabindex="-1"><a class="header-anchor" href="#行为型-16-迭代器模式"><span>行为型:_16_迭代器模式</span></a></h2><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>/* eslint-disable no-var */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 迭代器对象</span></span>
<span class="line"><span>interface myIterator&lt;T&gt; {</span></span>
<span class="line"><span> getNext(): T;</span></span>
<span class="line"><span> hasNext(): boolean;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 可迭代接口</span></span>
<span class="line"><span>interface myIterable&lt;T&gt; {</span></span>
<span class="line"><span> getIterator(): myIterator&lt;T&gt;; // 获取迭代器对象</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 实现可迭代接口</span></span>
<span class="line"><span>class myList&lt;T&gt; implements myIterable&lt;T&gt; {</span></span>
<span class="line"><span> list: Array&lt;T&gt; = [];</span></span>
<span class="line"><span> push(item: T): void {</span></span>
<span class="line"><span>  this.list.push(item);</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> pop(): T | undefined {</span></span>
<span class="line"><span>  return this.list.pop();</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> getIterator(): myIterator&lt;T&gt; {</span></span>
<span class="line"><span>  return new myList.ListIterator&lt;T&gt;(this.list);</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> static ListIterator = class ListIterator&lt;T&gt; {</span></span>
<span class="line"><span>  currentIndex: number;</span></span>
<span class="line"><span>  list: Array&lt;T&gt;;</span></span>
<span class="line"><span>  constructor(list: T[]) {</span></span>
<span class="line"><span>   this.list = list;</span></span>
<span class="line"><span>   this.currentIndex = 0;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  hasNext(): boolean {</span></span>
<span class="line"><span>   return this.currentIndex &lt; this.list.length;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  getNext(): T {</span></span>
<span class="line"><span>   return this.list[this.currentIndex++];</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span> };</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function main() {</span></span>
<span class="line"><span> var list = new myList();</span></span>
<span class="line"><span> list.push(1);</span></span>
<span class="line"><span> list.push(2);</span></span>
<span class="line"><span> list.push(3);</span></span>
<span class="line"><span> list.push(4);</span></span>
<span class="line"><span> list.push(5);</span></span>
<span class="line"><span> list.push(6);</span></span>
<span class="line"><span></span></span>
<span class="line"><span> var iterator = list.getIterator(); // 获取迭代器对象</span></span>
<span class="line"><span> while (iterator.hasNext()) {</span></span>
<span class="line"><span>  console.log(iterator.getNext());</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>main();</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="行为型-17-中介者模式" tabindex="-1"><a class="header-anchor" href="#行为型-17-中介者模式"><span>行为型:_17_中介者模式</span></a></h2><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>// 消息发送的中介者</span></span>
<span class="line"><span>abstract class MsgMediator {</span></span>
<span class="line"><span> protected abstract msgReceivers: Map&lt;string, MsgReceiver&gt;;</span></span>
<span class="line"><span> abstract join(receiverId: string, receiver: MsgReceiver): boolean; // 登录</span></span>
<span class="line"><span> abstract sendMsgToReceiver(fromReceiverId: string, msg: string, toReceiverId: string): boolean;</span></span>
<span class="line"><span> abstract sendMsgToReceivers(fromReceiverId: string, msg: string, toReceiverIds: string[]): boolean;</span></span>
<span class="line"><span> abstract sendMsgToAll(fromReceiverId: string, msg: string): void;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// 消息的接受者</span></span>
<span class="line"><span>abstract class MsgReceiver {</span></span>
<span class="line"><span> protected abstract msgMediator: MsgMediator; // 消息发送者聚合了一个中介者</span></span>
<span class="line"><span> abstract receiveMsg(msg: string, fromUserId: string): void; // 接收消息</span></span>
<span class="line"><span> abstract sendMsgToUser(msg: string, toUserId: string): boolean; // 使用中介者发送点对点消息</span></span>
<span class="line"><span> abstract sendMsgToUsers(msg: string, toUserIds: Array&lt;string&gt;): boolean; // 使用中介者发送一对多消息</span></span>
<span class="line"><span> abstract broadcastMessage(msg: string): void; // 使用中介者发送广播消息</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 聊天室</span></span>
<span class="line"><span>class ChatRoom extends MsgMediator {</span></span>
<span class="line"><span> protected chatRoomId: string;</span></span>
<span class="line"><span> protected chatRoomName: string;</span></span>
<span class="line"><span> protected msgReceivers = new Map&lt;string, MsgReceiver&gt;();</span></span>
<span class="line"><span> constructor(chatRoomId: string, chatRoomName: string) {</span></span>
<span class="line"><span>  super();</span></span>
<span class="line"><span>  this.chatRoomId = chatRoomId;</span></span>
<span class="line"><span>  this.chatRoomName = chatRoomName;</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> join(UserId: string, User: MsgReceiver): boolean {</span></span>
<span class="line"><span>  this.msgReceivers.set(UserId, User);</span></span>
<span class="line"><span>  if (this.msgReceivers.has(UserId)) return true;</span></span>
<span class="line"><span>  return false;</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> sendMsgToReceiver(fromUserId: string, msg: string, toUserId: string): boolean {</span></span>
<span class="line"><span>  if (this.msgReceivers.has(toUserId)) {</span></span>
<span class="line"><span>   this.msgReceivers.get(toUserId)?.receiveMsg(msg, fromUserId);</span></span>
<span class="line"><span>   return true;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  return false;</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> sendMsgToReceivers(fromUserId: string, msg: string, toUserIds: string[]): boolean {</span></span>
<span class="line"><span>  let flag = true;</span></span>
<span class="line"><span>  toUserIds.forEach(toReceiverId =&gt; {</span></span>
<span class="line"><span>   if (this.sendMsgToReceiver(fromUserId, msg, toReceiverId) == false) flag = false;</span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span>  return flag;</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> sendMsgToAll(fromUserId: string, msg: string): void {</span></span>
<span class="line"><span>  this.msgReceivers.forEach((user, id) =&gt; user.receiveMsg(msg, fromUserId));</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class User extends MsgReceiver {</span></span>
<span class="line"><span> protected msgMediator: MsgMediator;</span></span>
<span class="line"><span> constructor(private userId: string, private userName: string) {</span></span>
<span class="line"><span>  super();</span></span>
<span class="line"><span>  this.userId = userId;</span></span>
<span class="line"><span>  this.userName = userName;</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> join(msgMediator: MsgMediator) {</span></span>
<span class="line"><span>  this.msgMediator = msgMediator;</span></span>
<span class="line"><span>  if (msgMediator.join(this.userId, this)) return true;</span></span>
<span class="line"><span>  return false;</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> sendMsgToUser(msg: string, toUserId: string): boolean {</span></span>
<span class="line"><span>  return this.msgMediator.sendMsgToReceiver(this.userId, msg, toUserId);</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> sendMsgToUsers(msg: string, toUserIds: Array&lt;string&gt;): boolean {</span></span>
<span class="line"><span>  return this.msgMediator.sendMsgToReceivers(this.userId, msg, toUserIds);</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> broadcastMessage(msg: string): void {</span></span>
<span class="line"><span>  return this.msgMediator.sendMsgToAll(this.userId, msg);</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> receiveMsg(msg: string, fromUserId: string): void {</span></span>
<span class="line"><span>  console.log(\`用户\${this.userId}收到从用户\${fromUserId}发来的消息:\${msg}\`);</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> getUserId(): string {</span></span>
<span class="line"><span>  return this.userId;</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> getUserName(): string {</span></span>
<span class="line"><span>  return this.userName;</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function main() {</span></span>
<span class="line"><span> const chatRoom = new ChatRoom(&quot;111&quot;, &quot;测试&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span> const user1 = new User(&quot;001&quot;, &quot;user1&quot;);</span></span>
<span class="line"><span> const user2 = new User(&quot;002&quot;, &quot;user2&quot;);</span></span>
<span class="line"><span> const user3 = new User(&quot;003&quot;, &quot;user3&quot;);</span></span>
<span class="line"><span> const user4 = new User(&quot;004&quot;, &quot;user4&quot;);</span></span>
<span class="line"><span> const user5 = new User(&quot;005&quot;, &quot;user5&quot;);</span></span>
<span class="line"><span> const user6 = new User(&quot;006&quot;, &quot;user6&quot;);</span></span>
<span class="line"><span> const user7 = new User(&quot;007&quot;, &quot;user7&quot;);</span></span>
<span class="line"><span> const user8 = new User(&quot;008&quot;, &quot;user8&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span> console.log(user1.join(chatRoom));</span></span>
<span class="line"><span> console.log(user2.join(chatRoom));</span></span>
<span class="line"><span> console.log(user3.join(chatRoom));</span></span>
<span class="line"><span> console.log(user4.join(chatRoom));</span></span>
<span class="line"><span> console.log(user5.join(chatRoom));</span></span>
<span class="line"><span> console.log(user6.join(chatRoom));</span></span>
<span class="line"><span> console.log(user7.join(chatRoom));</span></span>
<span class="line"><span> console.log(user8.join(chatRoom));</span></span>
<span class="line"><span></span></span>
<span class="line"><span> // 点对点发送</span></span>
<span class="line"><span> user1.sendMsgToUser(&quot;《私聊消息:哈喽》&quot;, user2.getUserId());</span></span>
<span class="line"><span> user2.sendMsgToUser(&quot;《私聊消息:哈喽》&quot;, user3.getUserId());</span></span>
<span class="line"><span> user3.sendMsgToUser(&quot;《私聊消息:哈喽》&quot;, user4.getUserId());</span></span>
<span class="line"><span> user4.sendMsgToUser(&quot;《私聊消息:哈喽》&quot;, user5.getUserId());</span></span>
<span class="line"><span> user5.sendMsgToUser(&quot;《私聊消息:哈喽》&quot;, user6.getUserId());</span></span>
<span class="line"><span> user6.sendMsgToUser(&quot;《私聊消息:哈喽》&quot;, user7.getUserId());</span></span>
<span class="line"><span></span></span>
<span class="line"><span> // 一对多发送</span></span>
<span class="line"><span> user7.sendMsgToUsers(&quot;《群发消息：哈喽》&quot;, [user1.getUserId(), user2.getUserId(), user3.getUserId()]);</span></span>
<span class="line"><span></span></span>
<span class="line"><span> // 广播发送</span></span>
<span class="line"><span> user8.broadcastMessage(&quot;《广播消息:哈喽》&quot;);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>main();</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="行为型-18-备忘录模式" tabindex="-1"><a class="header-anchor" href="#行为型-18-备忘录模式"><span>行为型:_18_备忘录模式</span></a></h2><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>// 备忘录模式，记录某对象的状态</span></span>
<span class="line"><span>class Memento {</span></span>
<span class="line"><span> private textContent: string;</span></span>
<span class="line"><span> constructor(textContent: string) {</span></span>
<span class="line"><span>  this.textContent = textContent;</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> getTextContent() {</span></span>
<span class="line"><span>  return this.textContent;</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class TextEditor {</span></span>
<span class="line"><span> private textContent = &quot;&quot;;</span></span>
<span class="line"><span> typing(text: string) {</span></span>
<span class="line"><span>  this.textContent += text;</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> // 保存状态</span></span>
<span class="line"><span> save(): Memento {</span></span>
<span class="line"><span>  return new Memento(this.textContent);</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> // 恢复状态</span></span>
<span class="line"><span> restore(memento: Memento | undefined | null) {</span></span>
<span class="line"><span>  if (memento) this.textContent = memento.getTextContent();</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class MementoHistoryManager {</span></span>
<span class="line"><span> mementos = new Map&lt;string, Memento&gt;();</span></span>
<span class="line"><span> add(describe: string, memento: Memento) {</span></span>
<span class="line"><span>  this.mementos.set(describe, memento);</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> get(describe: string) {</span></span>
<span class="line"><span>  return this.mementos.get(describe);</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> remove(describe: string) {</span></span>
<span class="line"><span>  this.mementos.delete(describe);</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function main() {</span></span>
<span class="line"><span> const editor = new TextEditor();</span></span>
<span class="line"><span> const history = new MementoHistoryManager();</span></span>
<span class="line"><span></span></span>
<span class="line"><span> editor.typing(&quot;hi this is the init state.&quot;); // 输入内容</span></span>
<span class="line"><span> history.add(&quot;快照1&quot;, editor.save()); // 保存为快照1</span></span>
<span class="line"><span> console.log(editor); //TextEditor { context: &#39;hi this is the init state.&#39; }</span></span>
<span class="line"><span></span></span>
<span class="line"><span> editor.typing(&quot;hhhhhhhhhhhhhhhhhh.&quot;); // 输入内容</span></span>
<span class="line"><span> console.log(editor); //TextEditor { context: &#39;hi this is the init state.hhhhhhhhhhhhhhhhhh.&#39; }</span></span>
<span class="line"><span> history.add(&quot;快照2&quot;, editor.save()); // 保存为快照2</span></span>
<span class="line"><span></span></span>
<span class="line"><span> editor.restore(history.get(&quot;快照1&quot;)); // 恢复快照1</span></span>
<span class="line"><span> console.log(editor); //TextEditor { context: &#39;hi this is the init state.&#39; }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>main();</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="行为型-19-观察者模式" tabindex="-1"><a class="header-anchor" href="#行为型-19-观察者模式"><span>行为型:_19_观察者模式</span></a></h2><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>// 可观察对象</span></span>
<span class="line"><span>interface IObservable {</span></span>
<span class="line"><span> add(observer: IObserver): void;</span></span>
<span class="line"><span> remove(observer: IObserver): void;</span></span>
<span class="line"><span> notify(): void;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// 观察者</span></span>
<span class="line"><span>interface IObserver {</span></span>
<span class="line"><span> update(): void;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 消息发布者</span></span>
<span class="line"><span>class MessagePublisher implements IObservable {</span></span>
<span class="line"><span> currentMessage: string;</span></span>
<span class="line"><span> constructor() {</span></span>
<span class="line"><span>  setInterval(() =&gt; {</span></span>
<span class="line"><span>   this.currentMessage = &quot;hahaha&quot; + Date.now();</span></span>
<span class="line"><span>   console.log(&quot;被观察者：我发布了新消息:&quot; + this.currentMessage);</span></span>
<span class="line"><span>   this.notify(); // 通知被观察者</span></span>
<span class="line"><span>  }, 500);</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> // 注册、移除、通知观察者的逻辑</span></span>
<span class="line"><span> observers: Set&lt;IObserver&gt; = new Set(); // 观察者集合</span></span>
<span class="line"><span> add(observer: IObserver): void {</span></span>
<span class="line"><span>  // 添加观察者</span></span>
<span class="line"><span>  this.observers.add(observer);</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> remove(observer: IObserver): void {</span></span>
<span class="line"><span>  // 移除观察者</span></span>
<span class="line"><span>  this.observers.delete(observer);</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> notify(): void {</span></span>
<span class="line"><span>  // 通知所有观察者</span></span>
<span class="line"><span>  this.observers.forEach(item =&gt; item.update());</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 消息监听者</span></span>
<span class="line"><span>class MessageReceiver implements IObserver {</span></span>
<span class="line"><span> constructor(private target: MessagePublisher) {</span></span>
<span class="line"><span>  this.target = target;</span></span>
<span class="line"><span>  this.target.add(this);</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> update(): void {</span></span>
<span class="line"><span>  console.log(&quot;观察者：收到了被观察的消息推送：&quot; + this.target.currentMessage);</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function main() {</span></span>
<span class="line"><span> let publisher = new MessagePublisher();</span></span>
<span class="line"><span> let receiver1 = new MessageReceiver(publisher);</span></span>
<span class="line"><span> let receiver2 = new MessageReceiver(publisher);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>main();</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="行为型-20-状态模式" tabindex="-1"><a class="header-anchor" href="#行为型-20-状态模式"><span>行为型:_20_状态模式</span></a></h2><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>abstract class State {</span></span>
<span class="line"><span> abstract doSomething(context: Context): void;</span></span>
<span class="line"><span> // abstract inputHandler(context: Context): void; // 通过输入处理函数，可以实现只能从某种状态到某种状态的切换</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class Context {</span></span>
<span class="line"><span> currentState: State = new InitState();</span></span>
<span class="line"><span> changeState(state: State): void {</span></span>
<span class="line"><span>  this.currentState = state;</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> doSomething(): void {</span></span>
<span class="line"><span>  this.currentState.doSomething(this);</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class TiredState extends State {</span></span>
<span class="line"><span> doSomething(context: Context): void {</span></span>
<span class="line"><span>  console.log(&quot;精疲力尽的做某事&quot;);</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>class InitState extends State {</span></span>
<span class="line"><span> doSomething(context: Context): void {</span></span>
<span class="line"><span>  console.log(&quot;元气满满的做某事&quot;);</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function main() {</span></span>
<span class="line"><span> const someone = new Context();</span></span>
<span class="line"><span> someone.doSomething();</span></span>
<span class="line"><span> someone.changeState(new TiredState());</span></span>
<span class="line"><span> someone.doSomething();</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>main();</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="行为型-21-策略模式" tabindex="-1"><a class="header-anchor" href="#行为型-21-策略模式"><span>行为型:_21_策略模式</span></a></h2><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>// 策略模式</span></span>
<span class="line"><span>class Animal {</span></span>
<span class="line"><span> constructor(</span></span>
<span class="line"><span>  private flyStrategy: FlyStrategy, // 行为是接口，具体什么行为由子类定义</span></span>
<span class="line"><span>  private jumpStrategy: JumpStrategy,</span></span>
<span class="line"><span>  private runStrategy: RunStrategy</span></span>
<span class="line"><span> ) {</span></span>
<span class="line"><span>  this.flyStrategy = flyStrategy;</span></span>
<span class="line"><span>  this.jumpStrategy = jumpStrategy;</span></span>
<span class="line"><span>  this.runStrategy = runStrategy;</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> fly() {</span></span>
<span class="line"><span>  this.flyStrategy.fly();</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> jump() {</span></span>
<span class="line"><span>  this.jumpStrategy.jump();</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> run() {</span></span>
<span class="line"><span>  this.runStrategy.run();</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// 飞行策略</span></span>
<span class="line"><span>interface FlyStrategy {</span></span>
<span class="line"><span> fly(): void;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>interface JumpStrategy {</span></span>
<span class="line"><span> jump(): void;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>interface RunStrategy {</span></span>
<span class="line"><span> run(): void;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 默认的飞行策略</span></span>
<span class="line"><span>class DefaultFlyStrategy implements FlyStrategy {</span></span>
<span class="line"><span> fly() {</span></span>
<span class="line"><span>  console.log(&quot;Default Fly&quot;);</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// 不会飞的飞行策略</span></span>
<span class="line"><span>class CantFlyStrategy implements FlyStrategy {</span></span>
<span class="line"><span> fly() {</span></span>
<span class="line"><span>  console.log(&quot;Can&#39;t Fly&quot;);</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class DefaultJumpStrategy implements JumpStrategy {</span></span>
<span class="line"><span> jump() {</span></span>
<span class="line"><span>  console.log(&quot;Default Jump&quot;);</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>class CantJumpStrategy implements JumpStrategy {</span></span>
<span class="line"><span> jump() {</span></span>
<span class="line"><span>  console.log(&quot;Can&#39;t Jump&quot;);</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class DefaultRunStrategy implements RunStrategy {</span></span>
<span class="line"><span> run() {</span></span>
<span class="line"><span>  console.log(&quot;Default Run&quot;);</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>class CantRunStrategy implements RunStrategy {</span></span>
<span class="line"><span> run() {</span></span>
<span class="line"><span>  console.log(&quot;Can&#39;t Run&quot;);</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function main() {</span></span>
<span class="line"><span> let bird = new Animal(new DefaultFlyStrategy(), new DefaultJumpStrategy(), new CantRunStrategy());</span></span>
<span class="line"><span> console.log(&quot;bird:&quot;);</span></span>
<span class="line"><span> bird.fly();</span></span>
<span class="line"><span> bird.jump();</span></span>
<span class="line"><span> bird.run();</span></span>
<span class="line"><span></span></span>
<span class="line"><span> let dog = new Animal(new CantFlyStrategy(), new DefaultJumpStrategy(), new DefaultRunStrategy());</span></span>
<span class="line"><span> console.log(&quot;dog:&quot;);</span></span>
<span class="line"><span> dog.fly();</span></span>
<span class="line"><span> dog.jump();</span></span>
<span class="line"><span> dog.run();</span></span>
<span class="line"><span></span></span>
<span class="line"><span> let duck = new Animal(new DefaultFlyStrategy(), new CantJumpStrategy(), new CantRunStrategy());</span></span>
<span class="line"><span> console.log(&quot;duck:&quot;);</span></span>
<span class="line"><span> duck.fly();</span></span>
<span class="line"><span> duck.jump();</span></span>
<span class="line"><span> duck.run();</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>main();</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="行为型-22-模板方法模式" tabindex="-1"><a class="header-anchor" href="#行为型-22-模板方法模式"><span>行为型:_22_模板方法模式</span></a></h2><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>// 模板方法是指：有某一系统按某规定顺序执行，但其中某一阶段的具体实现是未知的</span></span>
<span class="line"><span>// 解决方法是使用抽象方法，或者使用hook钩子函数</span></span>
<span class="line"><span>abstract class SomeSystem {</span></span>
<span class="line"><span> private beforeStage2Hooks: Array&lt;() =&gt; void&gt; = []; // 钩子函数列表，私有化，防止被赋值为空数组</span></span>
<span class="line"><span> private afterStage2Hooks: Array&lt;() =&gt; void&gt; = [];</span></span>
<span class="line"><span> beforeStage2(hook: () =&gt; void) {</span></span>
<span class="line"><span>  // beforeStage3钩子函数添加</span></span>
<span class="line"><span>  this.beforeStage2Hooks.push(hook);</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> afterStage2(hook: () =&gt; void) {</span></span>
<span class="line"><span>  this.afterStage2Hooks.push(hook);</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> private stage1() {</span></span>
<span class="line"><span>  console.log(&quot;stage1&quot;);</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> private stage2() {</span></span>
<span class="line"><span>  console.log(&quot;stage2&quot;);</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> abstract stage3(): void; // 阶段3 的具体实现是未知的</span></span>
<span class="line"><span> private stage4() {</span></span>
<span class="line"><span>  console.log(&quot;stage4&quot;);</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> start() {</span></span>
<span class="line"><span>  this.stage1();</span></span>
<span class="line"><span>  this.beforeStage2Hooks.forEach(hook =&gt; hook()); // 执行某些注入的操作</span></span>
<span class="line"><span>  this.stage2();</span></span>
<span class="line"><span>  this.afterStage2Hooks.forEach(hook =&gt; hook()); // 执行某些注入的操作</span></span>
<span class="line"><span>  this.stage3();</span></span>
<span class="line"><span>  this.stage4();</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class Subsystem extends SomeSystem {</span></span>
<span class="line"><span> constructor() {</span></span>
<span class="line"><span>  super();</span></span>
<span class="line"><span>  this.beforeStage2(() =&gt; {</span></span>
<span class="line"><span>   // 通过钩子函数，实现在阶段2之前执行某些操作</span></span>
<span class="line"><span>   console.log(&quot;before stage2&quot;);</span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> stage3() {</span></span>
<span class="line"><span>  // 给出阶段3的具体实现</span></span>
<span class="line"><span>  console.log(&quot;stage3&quot;);</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function main() {</span></span>
<span class="line"><span> let system = new Subsystem();</span></span>
<span class="line"><span> system.afterStage2(() =&gt; {</span></span>
<span class="line"><span>  // 通过钩子函数，实现在阶段2之后执行某些操作</span></span>
<span class="line"><span>  console.log(&quot;after stage2&quot;);</span></span>
<span class="line"><span> });</span></span>
<span class="line"><span> system.start(); // 启动系统</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>main();</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="行为型-23-访问者" tabindex="-1"><a class="header-anchor" href="#行为型-23-访问者"><span>行为型:_23_访问者</span></a></h2><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>// 访问者接口</span></span>
<span class="line"><span>interface PcPartVisiter {</span></span>
<span class="line"><span> visitDisplay(display: Display): void;</span></span>
<span class="line"><span> visitMouse(mouse: Mouse): void;</span></span>
<span class="line"><span> visitKeyBoard(keyBoard: KeyBoard): void;</span></span>
<span class="line"><span> visitDisk(disk: Disk): void;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 具体访问者</span></span>
<span class="line"><span>class UpdatePackage implements PcPartVisiter {</span></span>
<span class="line"><span> visitDisplay(display: Display): void {</span></span>
<span class="line"><span>  // do something</span></span>
<span class="line"><span>  display.version = &quot;v0.2&quot;; // 升级</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> visitMouse(mouse: Mouse): void {</span></span>
<span class="line"><span>  mouse.version = &quot;v0.2&quot;;</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> visitKeyBoard(keyBoard: KeyBoard): void {</span></span>
<span class="line"><span>  keyBoard.version = &quot;v0.2&quot;;</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> visitDisk(disk: Disk): void {</span></span>
<span class="line"><span>  disk.version = &quot;v0.2&quot;;</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 电脑</span></span>
<span class="line"><span>class Computer {</span></span>
<span class="line"><span> display = new Display();</span></span>
<span class="line"><span> mouse = new Mouse();</span></span>
<span class="line"><span> keyBoard = new KeyBoard();</span></span>
<span class="line"><span> disk = new Disk();</span></span>
<span class="line"><span> update(visiter: PcPartVisiter) {</span></span>
<span class="line"><span>  this.display.update(visiter);</span></span>
<span class="line"><span>  this.mouse.update(visiter);</span></span>
<span class="line"><span>  this.keyBoard.update(visiter);</span></span>
<span class="line"><span>  this.disk.update(visiter);</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>interface ComputerPart {</span></span>
<span class="line"><span> version: string;</span></span>
<span class="line"><span> update(visiter: PcPartVisiter): void;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>class Display implements ComputerPart {</span></span>
<span class="line"><span> version = &quot;v0.1&quot;;</span></span>
<span class="line"><span> update(visiter: PcPartVisiter): void {</span></span>
<span class="line"><span>  visiter.visitDisplay(this);</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>class Mouse implements ComputerPart {</span></span>
<span class="line"><span> version = &quot;v0.1&quot;;</span></span>
<span class="line"><span> update(visiter: PcPartVisiter): void {</span></span>
<span class="line"><span>  visiter.visitMouse(this);</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>class KeyBoard implements ComputerPart {</span></span>
<span class="line"><span> version = &quot;v0.1&quot;;</span></span>
<span class="line"><span> update(visiter: PcPartVisiter): void {</span></span>
<span class="line"><span>  visiter.visitKeyBoard(this);</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>class Disk implements ComputerPart {</span></span>
<span class="line"><span> version = &quot;v0.1&quot;;</span></span>
<span class="line"><span> update(visiter: PcPartVisiter): void {</span></span>
<span class="line"><span>  visiter.visitDisk(this);</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function main() {</span></span>
<span class="line"><span> const computer = new Computer();</span></span>
<span class="line"><span> console.log(computer);</span></span>
<span class="line"><span></span></span>
<span class="line"><span> computer.update(new UpdatePackage());</span></span>
<span class="line"><span> console.log(computer);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>main();</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,53),d=[p];function c(v,r){return a(),n("div",null,d)}const u=s(l,[["render",c],["__file","设计模式学习笔记(TypeScript版).html.vue"]]),m=JSON.parse('{"path":"/%E7%90%86%E8%AE%BA/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0(TypeScript%E7%89%88)/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0(TypeScript%E7%89%88).html","title":"设计模式学习笔记(TypeScript版)","lang":"zh-CN","frontmatter":{"title":"设计模式学习笔记(TypeScript版)","date":"2023-01-10T21:21:00.000Z","cover":"./cover/23种设计模式学习笔记.png","tag":["笔记","设计模式","design pattens","typescript"],"category":"笔记","star":true,"description":"设计模式学习笔记(TypeScript版) 目录 设计模式学习笔记(TypeScript版) 目录 创建型:_1_工厂方法模式 创建型:_2_抽象方法模式 创建型:_3_单例模式 创建型:_4_建造者模式 创建型:_5_原型模式 结构型:_6_适配器模式 对象适配器模式 类适配器模式 结构型:_7_桥接模式 结构型:_8_组合模式 结构型:_9_装饰器...","head":[["meta",{"property":"og:url","content":"https://dingdingdang.online/%E7%90%86%E8%AE%BA/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0(TypeScript%E7%89%88)/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0(TypeScript%E7%89%88).html"}],["meta",{"property":"og:site_name","content":"YiguiDing的Blog小站"}],["meta",{"property":"og:title","content":"设计模式学习笔记(TypeScript版)"}],["meta",{"property":"og:description","content":"设计模式学习笔记(TypeScript版) 目录 设计模式学习笔记(TypeScript版) 目录 创建型:_1_工厂方法模式 创建型:_2_抽象方法模式 创建型:_3_单例模式 创建型:_4_建造者模式 创建型:_5_原型模式 结构型:_6_适配器模式 对象适配器模式 类适配器模式 结构型:_7_桥接模式 结构型:_8_组合模式 结构型:_9_装饰器..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-28T11:27:55.000Z"}],["meta",{"property":"article:author","content":"丁毅桂"}],["meta",{"property":"article:tag","content":"笔记"}],["meta",{"property":"article:tag","content":"设计模式"}],["meta",{"property":"article:tag","content":"design pattens"}],["meta",{"property":"article:tag","content":"typescript"}],["meta",{"property":"article:published_time","content":"2023-01-10T21:21:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-11-28T11:27:55.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"设计模式学习笔记(TypeScript版)\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-01-10T21:21:00.000Z\\",\\"dateModified\\":\\"2023-11-28T11:27:55.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"丁毅桂\\",\\"email\\":\\"2449695354@qq.com\\"}]}"],["meta",{"name":"baidu-site-verification","content":"codeva-PwE9Ts6nMl"}]]},"headers":[{"level":2,"title":"目录","slug":"目录","link":"#目录","children":[]},{"level":2,"title":"创建型:_1_工厂方法模式","slug":"创建型-1-工厂方法模式","link":"#创建型-1-工厂方法模式","children":[]},{"level":2,"title":"创建型:_2_抽象方法模式","slug":"创建型-2-抽象方法模式","link":"#创建型-2-抽象方法模式","children":[]},{"level":2,"title":"创建型:_3_单例模式","slug":"创建型-3-单例模式","link":"#创建型-3-单例模式","children":[]},{"level":2,"title":"创建型:_4_建造者模式","slug":"创建型-4-建造者模式","link":"#创建型-4-建造者模式","children":[]},{"level":2,"title":"创建型:_5_原型模式","slug":"创建型-5-原型模式","link":"#创建型-5-原型模式","children":[]},{"level":2,"title":"结构型:_6_适配器模式","slug":"结构型-6-适配器模式","link":"#结构型-6-适配器模式","children":[{"level":3,"title":"对象适配器模式","slug":"对象适配器模式","link":"#对象适配器模式","children":[]},{"level":3,"title":"类适配器模式","slug":"类适配器模式","link":"#类适配器模式","children":[]}]},{"level":2,"title":"结构型:_7_桥接模式","slug":"结构型-7-桥接模式","link":"#结构型-7-桥接模式","children":[]},{"level":2,"title":"结构型:_8_组合模式","slug":"结构型-8-组合模式","link":"#结构型-8-组合模式","children":[]},{"level":2,"title":"结构型:_9_装饰器","slug":"结构型-9-装饰器","link":"#结构型-9-装饰器","children":[]},{"level":2,"title":"结构型:_10_外观模式","slug":"结构型-10-外观模式","link":"#结构型-10-外观模式","children":[]},{"level":2,"title":"结构型:_11_享元模式","slug":"结构型-11-享元模式","link":"#结构型-11-享元模式","children":[]},{"level":2,"title":"结构型:_12_代理模式","slug":"结构型-12-代理模式","link":"#结构型-12-代理模式","children":[]},{"level":2,"title":"行为型:_13_责任链模式","slug":"行为型-13-责任链模式","link":"#行为型-13-责任链模式","children":[]},{"level":2,"title":"行为型:_14_命令模式","slug":"行为型-14-命令模式","link":"#行为型-14-命令模式","children":[]},{"level":2,"title":"行为型:_15_解释器模式","slug":"行为型-15-解释器模式","link":"#行为型-15-解释器模式","children":[]},{"level":2,"title":"行为型:_16_迭代器模式","slug":"行为型-16-迭代器模式","link":"#行为型-16-迭代器模式","children":[]},{"level":2,"title":"行为型:_17_中介者模式","slug":"行为型-17-中介者模式","link":"#行为型-17-中介者模式","children":[]},{"level":2,"title":"行为型:_18_备忘录模式","slug":"行为型-18-备忘录模式","link":"#行为型-18-备忘录模式","children":[]},{"level":2,"title":"行为型:_19_观察者模式","slug":"行为型-19-观察者模式","link":"#行为型-19-观察者模式","children":[]},{"level":2,"title":"行为型:_20_状态模式","slug":"行为型-20-状态模式","link":"#行为型-20-状态模式","children":[]},{"level":2,"title":"行为型:_21_策略模式","slug":"行为型-21-策略模式","link":"#行为型-21-策略模式","children":[]},{"level":2,"title":"行为型:_22_模板方法模式","slug":"行为型-22-模板方法模式","link":"#行为型-22-模板方法模式","children":[]},{"level":2,"title":"行为型:_23_访问者","slug":"行为型-23-访问者","link":"#行为型-23-访问者","children":[]}],"git":{"createdTime":1700226391000,"updatedTime":1701170875000,"contributors":[{"name":"YiguiDing","email":"2449695354@qq.com","commits":2}]},"readingTime":{"minutes":22.69,"words":6808},"filePathRelative":"理论/设计模式学习笔记(TypeScript版)/设计模式学习笔记(TypeScript版).md","localizedDate":"2023年1月10日","excerpt":"","autoDesc":true}');export{u as comp,m as data};
