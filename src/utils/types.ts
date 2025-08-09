export type TGlobalNextSteps = {
    text: string;
    style: string;
}

type TErrorContent = {
    illustration_name: string;
    illustration_animated: boolean;
    summary: string;
    detail_message: string;
    next_steps: TGlobalNextSteps[];
}

export type TDynamicErrorContent = {
    content: TErrorContent;
}

export type IBaseChannel = {
  name: string;
  icon_url: string;
}

export type ErrorFallbackProps = {
  resetErrorBoundary: () => void;
};