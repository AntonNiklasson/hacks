import "./App.css";
import { ModeToggle } from "./components/theming/mode-toggle";
import { ThemeProvider } from "./components/theming/theme-provider";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./components/ui/breadcrumb";
import { Button } from "./components/ui/button";
import { Calendar } from "./components/ui/calendar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./components/ui/carousel";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "./components/ui/input-otp";

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="theme">
      <header className="flex justify-between  mb-4">
        <h1>Lorem Ipsum</h1>
        <ModeToggle />
      </header>
      <div className="space-y-16">
        <section className="container">
          <h2 className="text-xl mb-4">Buttons</h2>
          <div className="flex flex-col items-start gap-4">
            <Button>Default Button</Button>
            <Button variant="secondary">Secondary Button</Button>
            <Button variant="destructive">Destructive Button</Button>
          </div>
        </section>

        <section className="container">
          <h2>OTP Input</h2>

          <InputOTP
            className="mx-auto"
            maxLength={6}
            render={({ slots }) => (
              <>
                <InputOTPGroup>
                  {slots.slice(0, 3).map((slot, index) => (
                    <InputOTPSlot key={index} {...slot} />
                  ))}{" "}
                </InputOTPGroup>
                <InputOTPSeparator />
                <InputOTPGroup>
                  {slots.slice(3).map((slot, index) => (
                    <InputOTPSlot key={index + 3} {...slot} />
                  ))}
                </InputOTPGroup>
              </>
            )}
          />
        </section>

        <section className="container">
          <h2>Carousel</h2>
          <Carousel className="size-128">
            <CarouselContent>
              <CarouselItem className="basis-1/2">
                <img src="https://picsum.photos/200/300" />
              </CarouselItem>
              <CarouselItem className="basis-1/2">
                <img src="https://picsum.photos/200/300" />
              </CarouselItem>
              <CarouselItem className="basis-1/2">
                <img src="https://picsum.photos/200/300" />
              </CarouselItem>
              <CarouselItem className="basis-1/2">
                <img src="https://picsum.photos/200/300" />
              </CarouselItem>
              <CarouselItem className="basis-1/2">
                <img src="https://picsum.photos/200/300" />
              </CarouselItem>
              <CarouselItem className="basis-1/2">
                <img src="https://picsum.photos/200/300" />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>

        <section>
          <h2>Breadcrumb</h2>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/components">Components</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </section>

        <section>
          <h2>Calendar</h2>
          <Calendar />
        </section>
      </div>
    </ThemeProvider>
  );
}

export default App;
